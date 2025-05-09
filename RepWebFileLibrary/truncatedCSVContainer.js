
		function renderTruncatedCSVContainerWithPlusNMore(containerId, items, label, color, titleString) {
			const container = document.getElementById(containerId);

			// Clear container and create two spans: one for label, one for list text
			container.innerHTML = "";
			const labelSpan = document.createElement("span");
			const listSpan = document.createElement("span");
			container.appendChild(labelSpan);
			container.appendChild(listSpan);

			// Apply label if provided
			if (label != null)
				labelSpan.textContent = label + " ";
			// Apply color if provided
			if (color)
				listSpan.style.color = color;
			//Apply titleString if provided
			if (titleString)
				listSpan.title = titleString;
			
			function update() {
				let displayText = "";
				let overflowIndex = -1;
		
				for (let i = 0; i < items.length; i++) {
					let tempText = displayText + (i > 0 ? ", " : "") + items[i];
					listSpan.textContent = tempText;

					if (container.scrollWidth > container.clientWidth) {
						overflowIndex = i -1;
						const hiddenCount = items.length - overflowIndex;
						displayText = items.slice(0, overflowIndex).join(", ") + `, +${hiddenCount} more`;
						break;
					}
					displayText = tempText;
				}
				
				listSpan.textContent = displayText;
			}
		
			window.addEventListener("resize", update);
			update();
		}