module.exports = function fcm(sails) {
	return {

		configure : {
			console.log("Configuration done");
		},

		defaults : {
			__configKey__: {}
		}

	};
}