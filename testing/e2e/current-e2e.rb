require 'capybara'
require 'capybara/dsl'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'
require 'percy'
require 'selenium/webdriver'
require 'selenium-webdriver'
# load 'custom_exports.rb'



# $:.each do |d|
#     p d 
# end 

# ENV.each {|k,v| puts "#{k}: #{v}"}  

module TestMod

  # include Capybara
  include Capybara::DSL
  # include Capybara::Selenium
  include Selenium

  # monkey patch to avoid reset sessions
  class Capybara::Selenium::Driver < Capybara::Driver::Base
    def reset!
      if @browser
        @browser.navigate.to('about:blank')
      end
    end
  end
  
  Selenium::WebDriver.logger.level = :debug
  Selenium::WebDriver.logger.output = 'selenium.log'

  config = Hash.new 
  config[:user] = ENV['LT_USERNAME']  
  config[:key] = ENV['LT_APIKEY'] 
  
  
   
  Capybara.register_driver :lambdatest do |app|
    # p app
    caps = {                       
      :browserName => "chrome",         
      :version => "76.0",         
      :platform =>  "win10",
      :name =>  "RSpec Sample Test",
      :build =>  "RSpec Selenium Sample",      
      :network =>  true,
      :visual =>  true,
      :video =>  true,
      :console =>  true,
      :tunnel =>true,
      :resolution => "1280x1024"
    } 
  
    a =Capybara::Selenium::Driver.new(
      app,
      :browser => :remote,
      :url => "https://#{config[:user]}:#{config[:key]}@hub.lambdatest.com/wd/hub",
      :desired_capabilities => caps
    )
    # puts a.class
    # puts a.options
    #  a.for(:remote,
    # :url => "https://#{config[:user]}:#{config[:key]}@hub.lambdatest.com/wd/hub",
    # :desired_capabilities => caps)
  end

  Capybara.register_driver :internetExplorer do |app|
    
    # p Capybara::Selenium::Driver::InternetExplorerDriver.options

    Capybara::Selenium::Driver.new(
      app,
      :browser => :internet_explorer,
      :options =>   Selenium::WebDriver::IE::Options.new({
        :ignore_zoom_levels => true,
        :ignore_zoom_setting => true,
        # :browser_attach_timeout => 1,
        :javascript_enabled => true,
        :persistent_hover => true,
        # :require_window_focus => true,
        :ignore_protected_mode_settings =>true,
      })
    )
    
    
    
  end    

  
  Capybara.register_driver :edgeBrowser do |app|
    
    # p Capybara::Selenium::Driver::InternetExplorerDriver.options

    

    Capybara::Selenium::Driver.new(
      app,
      :browser => :edge,
      :desired_capabilities =>Selenium::WebDriver::Remote::Capabilities::edge({
        :javascript_enabled => true,
        :css_selectors_enabled => true,
      }),
    )
    
    
    
  end    

  

  Capybara.run_server = false  


  Capybara.configure do |config|
  # config.default_max_wait_time = 20
    # config.w3c_click_offset = true
    # Capybara.current_session.driver.browser.manage.window.resize_to 100, 100
  end

  RSpec.configure do |config|
    # my_drivers = %i{   selenium internetExplorer edgeBrowser selenium_chrome     }
    # my_drivers = %i{   selenium internetExplorer edgeBrowser      }
    my_drivers = %i{  edgeBrowser  }
    # my_drivers = %i{ opera }
    # my_drivers = %i{ selenium }
    hosts = Hash.new 
    # hosts[:prod] =  %{https://watermine.firebaseapp.com}
    hosts[:dev] =  %{http://localhost:4200}
    config.around do |example|
      p example 
      my_drivers.each do |browser|
        hosts.each do |k,v|
          Capybara.current_driver = browser
          Capybara.app_host = v
          p Capybara.app_host.to_s +  %{  in } + Capybara.current_driver.to_s           
          example.run
        end    
      end  
    end  
    config.after :suite do
      # system %{taskkill /IM MicrosoftEdge.exe}
      system %{taskkill /IM MicrosoftEdge.exe -F}
      system %{taskkill /IM MicrosoftWebDrivers.exe}
    end    
  end
  
  def TestMod.startTest  
    @javascript
    # helper_mod = CustomExports.new
    # need hosts[:tests] so you dont make the ryberService and the componentObject.ts avail in production 
    
  
    RSpec.feature "login page" do

      scenario %{submit button should allow the person to see the video when the password is coorect} do
        visit %{/}
        login_submit = first %{.l_o_g_i_n_Submit}
        login_pass = first  %{.l_o_g_i_n_Password}
        login_pass.send_keys %{forbes500list}
        login_submit.select_option        
        sleep 4
        video = first %{.p_a_n_e_l_Videoground}
        video.select_option 
        expect(page).to have_selector %{.p_a_n_e_l_Videoground}
      end 
      
      scenario %{mfa button should bring user to multi-factor auth page} do
        sleep 3
        execute_script %Q{
          window.name = "/"
        }
        visit %{/}
        login_submit = all %{.l_o_g_i_n_Submit}
        login_submit = login_submit[1]
        login_submit.select_option        
        sleep 4
        expect(page).to have_selector %{.l_o_g_i_n_mfaHeading}
      end       
    end    
  end
end
TestMod.startTest



=begin
  for navigation you must head to all the links
=end