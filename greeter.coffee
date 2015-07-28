class Greeter 

	# Greeter implements a greeting messenger.
	#
	# @param [String] name Name to greet.
	#
	constructor: (name) ->
		@name =name

	# Greet named person with a message.
	# @param [String] message Message for named person.
	greet: (message) ->
		console.log("#{message}, #{name}!")
