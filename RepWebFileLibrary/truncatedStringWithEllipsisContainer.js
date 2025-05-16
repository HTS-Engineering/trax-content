
		function truncatedStringWithEllipsisContainer(containerId, displayString) {
			const container = document.getElementById(containerId);
			const items = displayString.split("");
			
			// Clear container and create two spans: one for label, one for list text
			container.innerHTML = "";
			const listSpan = document.createElement("span");
			container.appendChild(listSpan);
			listSpan.title = displayString;

			function update() {
				let displayText = "";
				let overflowIndex = -1;
		
				for (let i = 0; i < items.length; i++) {
					let tempText = displayText + items[i];
					listSpan.textContent = tempText + "...";

					if (container.scrollWidth > container.clientWidth) {
						overflowIndex = i;
						displayText = items.slice(0, overflowIndex).join("") + "...";
						break;
					}
					displayText = tempText;
				}
				
				listSpan.textContent = displayText;
			}
		
			window.addEventListener("resize", update);
			update();
		}