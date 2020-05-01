if (!Object.values) {
	Object.values = function values(O) {
        return Object.keys(O).map(function(e) {
            return O[e]
        })
	};
}