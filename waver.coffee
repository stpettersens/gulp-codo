class Waver

	# Waver implements a waving messenger.
	# @param [String] name Name to dismiss.
	constructor: (name) ->
		@name = name

	# Greet named person with a message.
	wave: () ->
		console.log("Goodbye, #{name}!")
