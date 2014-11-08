var main = function() {
	"use strict";

	var toDos = [
		"Finish writing this book",
		"Take Gracie to the park",
		"Answer emails",
		"Prep for Monday's class",
		"Make up some ToDos",
		"Get groceries"
	];

	$(".tabs a span").toArray().forEach(function (element) {
		//create a click handler for this element
		$(element).on("click", function() {
			//since we're using the jQuery version of element we'll go ahead and create a temporary variable so we don't need to keep recreating it
			var $element = $(element),
				$content,
				$input,
				$button,
				i;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				console.log("First tab clicked");
				$content = $("<ul>");
				for (i = toDos.length-1; i >= 0; i--) {
					$content.append($("<li>").text(toDos[i]));
				};
			} else if ($element.parent().is(":nth-child(2)")) {
				console.log("Second tab clicked");
				$content = $("<ul>");
				toDos.forEach(function (toDo) {
					$content.append($("<li>").text(toDo));
				});
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("Third tab is clicked");
				$input = $("<input>"),
				$button = $("<button>").text("+");

				$button.on("click", function() {
					if ($input.val() !== "") {
						toDos.push($input.val());
						$input.val("");
					}
				});
				$content = $("<div>").append($input).append($button);
			}
			$("main .content").append($content);

			return false;
		});
	});
};

$(document).ready(main);