export const data = [
	{
		category: "navbar",
		components: [
			{
				id: 0,
				size: "sm",
				html: `<nav class="bg-white flex items-center justify-between border-b border-gray-200 px-6 py-5 ">
						<div class="text-3xl font-bold tracking-wider text-cyan-500">
								TA<span class="text-gray-700">CO</span>
						</div>
						<ul class="group flex justify-center gap-4 ">
								<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Components</li>
								<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Templates</li>
						</ul>
				</nav>`,
				css: `
		*,
		::before,
		::after {
			box-sizing: border-box;
		
			border-width: 0;
		
			border-style: solid;
		
			border-color: #e5e7eb;
		}
		
		::before,
		::after {
			--tw-content: "";
		}
		
		html {
			line-height: 1.5;
		
			-webkit-text-size-adjust: 100%;
		
			-moz-tab-size: 4;
		
			-o-tab-size: 4;
			tab-size: 4;
		
			font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
				"Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		
			font-feature-settings: normal;
		
			font-variation-settings: normal;
		}
		
		body {
			margin: 0;
		
			line-height: inherit;
		}
		
		hr {
			height: 0;
		
			color: inherit;
		
			border-top-width: 1px;
		}
		
		abbr:where([title]) {
			-webkit-text-decoration: underline dotted;
			text-decoration: underline dotted;
		}
		
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: inherit;
			font-weight: inherit;
		}
		
		a {
			color: inherit;
			text-decoration: inherit;
		}
		
		b,
		strong {
			font-weight: bolder;
		}
		
		code,
		kbd,
		samp,
		pre {
			font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		
			font-size: 1em;
		}
		
		small {
			font-size: 80%;
		}
		
		sub,
		sup {
			font-size: 75%;
			line-height: 0;
			position: relative;
			vertical-align: baseline;
		}
		
		sub {
			bottom: -0.25em;
		}
		
		sup {
			top: -0.5em;
		}
		
		table {
			text-indent: 0;
		
			border-color: inherit;
		
			border-collapse: collapse;
		}
		
		button,
		input,
		optgroup,
		select,
		textarea {
			font-family: inherit;
		
			font-size: 100%;
		
			font-weight: inherit;
		
			line-height: inherit;
		
			color: inherit;
		
			margin: 0;
		
			padding: 0;
		}
		
		button,
		select {
			text-transform: none;
		}
		
		button,
		[type="button"],
		[type="reset"],
		[type="submit"] {
			-webkit-appearance: button;
		
			background-color: transparent;
		
			background-image: none;
		}
		
		:-moz-focusring {
			outline: auto;
		}
		
		:-moz-ui-invalid {
			box-shadow: none;
		}
		
		progress {
			vertical-align: baseline;
		}
		
		::-webkit-inner-spin-button,
		::-webkit-outer-spin-button {
			height: auto;
		}
		
		[type="search"] {
			-webkit-appearance: textfield;
		
			outline-offset: -2px;
		}
		
		::-webkit-search-decoration {
			-webkit-appearance: none;
		}
		
		::-webkit-file-upload-button {
			-webkit-appearance: button;
		
			font: inherit;
		}
		
		summary {
			display: list-item;
		}
		
		blockquote,
		dl,
		dd,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		figure,
		p,
		pre {
			margin: 0;
		}
		
		fieldset {
			margin: 0;
			padding: 0;
		}
		
		legend {
			padding: 0;
		}
		
		ol,
		ul,
		menu {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		
		textarea {
			resize: vertical;
		}
		
		input::-moz-placeholder,
		textarea::-moz-placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		input::placeholder,
		textarea::placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		button,
		[role="button"] {
			cursor: pointer;
		}
		
		:disabled {
			cursor: default;
		}
		
		img,
		svg,
		video,
		canvas,
		audio,
		iframe,
		embed,
		object {
			display: block;
		
			vertical-align: middle;
		}
		
		img,
		video {
			max-width: 100%;
			height: auto;
		}
		
		[hidden] {
			display: none;
		}
		
		*,
		::before,
		::after {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		::backdrop {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		.flex {
			display: flex;
		}
		
		.cursor-pointer {
			cursor: pointer;
		}
		
		.items-center {
			align-items: center;
		}
		
		.justify-center {
			justify-content: center;
		}
		
		.justify-between {
			justify-content: space-between;
		}
		
		.gap-4 {
			gap: 1rem;
		}
		
		.border-b {
			border-bottom-width: 1px;
		}
		
		.border-gray-200 {
			--tw-border-opacity: 1;
			border-color: rgb(229 231 235 / var(--tw-border-opacity));
		}
		
		.bg-white {
			--tw-bg-opacity: 1;
			background-color: rgb(255 255 255 / var(--tw-bg-opacity));
		}
		
		.px-6 {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		
		.py-5 {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
		
		.text-3xl {
			font-size: 1.875rem;
			line-height: 2.25rem;
		}
		
		.text-lg {
			font-size: 1.125rem;
			line-height: 1.75rem;
		}
		
		.font-bold {
			font-weight: 700;
		}
		
		.tracking-wider {
			letter-spacing: 0.05em;
		}
		
		.text-cyan-500 {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		.text-gray-700 {
			--tw-text-opacity: 1;
			color: rgb(55 65 81 / var(--tw-text-opacity));
		}
		
		.text-red-500 {
			--tw-text-opacity: 1;
			color: rgb(239 68 68 / var(--tw-text-opacity));
		}
		
		.transition-colors {
			transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
		}
		
		.hover\:text-cyan-500:hover {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		`,
			},
			{
				id: 1,
				size: "md",
				html: `<nav class="bg-white flex items-center justify-between border-b border-gray-200 px-6 py-5 ">
						<div class="text-3xl font-bold tracking-wider text-cyan-500">
								TA<span class="text-gray-700">CO</span>
						</div>
						<ul class="group flex justify-center gap-4 ">
								<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Components</li>
								<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Templates</li>
						</ul>
				</nav>`,
				css: `
		*,
		::before,
		::after {
			box-sizing: border-box;
		
			border-width: 0;
		
			border-style: solid;
		
			border-color: #e5e7eb;
		}
		
		::before,
		::after {
			--tw-content: "";
		}
		
		html {
			line-height: 1.5;
		
			-webkit-text-size-adjust: 100%;
		
			-moz-tab-size: 4;
		
			-o-tab-size: 4;
			tab-size: 4;
		
			font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
				"Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		
			font-feature-settings: normal;
		
			font-variation-settings: normal;
		}
		
		body {
			margin: 0;
		
			line-height: inherit;
		}
		
		hr {
			height: 0;
		
			color: inherit;
		
			border-top-width: 1px;
		}
		
		abbr:where([title]) {
			-webkit-text-decoration: underline dotted;
			text-decoration: underline dotted;
		}
		
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: inherit;
			font-weight: inherit;
		}
		
		a {
			color: inherit;
			text-decoration: inherit;
		}
		
		b,
		strong {
			font-weight: bolder;
		}
		
		code,
		kbd,
		samp,
		pre {
			font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		
			font-size: 1em;
		}
		
		small {
			font-size: 80%;
		}
		
		sub,
		sup {
			font-size: 75%;
			line-height: 0;
			position: relative;
			vertical-align: baseline;
		}
		
		sub {
			bottom: -0.25em;
		}
		
		sup {
			top: -0.5em;
		}
		
		table {
			text-indent: 0;
		
			border-color: inherit;
		
			border-collapse: collapse;
		}
		
		button,
		input,
		optgroup,
		select,
		textarea {
			font-family: inherit;
		
			font-size: 100%;
		
			font-weight: inherit;
		
			line-height: inherit;
		
			color: inherit;
		
			margin: 0;
		
			padding: 0;
		}
		
		button,
		select {
			text-transform: none;
		}
		
		button,
		[type="button"],
		[type="reset"],
		[type="submit"] {
			-webkit-appearance: button;
		
			background-color: transparent;
		
			background-image: none;
		}
		
		:-moz-focusring {
			outline: auto;
		}
		
		:-moz-ui-invalid {
			box-shadow: none;
		}
		
		progress {
			vertical-align: baseline;
		}
		
		::-webkit-inner-spin-button,
		::-webkit-outer-spin-button {
			height: auto;
		}
		
		[type="search"] {
			-webkit-appearance: textfield;
		
			outline-offset: -2px;
		}
		
		::-webkit-search-decoration {
			-webkit-appearance: none;
		}
		
		::-webkit-file-upload-button {
			-webkit-appearance: button;
		
			font: inherit;
		}
		
		summary {
			display: list-item;
		}
		
		blockquote,
		dl,
		dd,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		figure,
		p,
		pre {
			margin: 0;
		}
		
		fieldset {
			margin: 0;
			padding: 0;
		}
		
		legend {
			padding: 0;
		}
		
		ol,
		ul,
		menu {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		
		textarea {
			resize: vertical;
		}
		
		input::-moz-placeholder,
		textarea::-moz-placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		input::placeholder,
		textarea::placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		button,
		[role="button"] {
			cursor: pointer;
		}
		
		:disabled {
			cursor: default;
		}
		
		img,
		svg,
		video,
		canvas,
		audio,
		iframe,
		embed,
		object {
			display: block;
		
			vertical-align: middle;
		}
		
		img,
		video {
			max-width: 100%;
			height: auto;
		}
		
		[hidden] {
			display: none;
		}
		
		*,
		::before,
		::after {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		::backdrop {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		.flex {
			display: flex;
		}
		
		.cursor-pointer {
			cursor: pointer;
		}
		
		.items-center {
			align-items: center;
		}
		
		.justify-center {
			justify-content: center;
		}
		
		.justify-between {
			justify-content: space-between;
		}
		
		.gap-4 {
			gap: 1rem;
		}
		
		.border-b {
			border-bottom-width: 1px;
		}
		
		.border-gray-200 {
			--tw-border-opacity: 1;
			border-color: rgb(229 231 235 / var(--tw-border-opacity));
		}
		
		.bg-white {
			--tw-bg-opacity: 1;
			background-color: rgb(255 255 255 / var(--tw-bg-opacity));
		}
		
		.px-6 {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		
		.py-5 {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
		
		.text-3xl {
			font-size: 1.875rem;
			line-height: 2.25rem;
		}
		
		.text-lg {
			font-size: 1.125rem;
			line-height: 1.75rem;
		}
		
		.font-bold {
			font-weight: 700;
		}
		
		.tracking-wider {
			letter-spacing: 0.05em;
		}
		
		.text-cyan-500 {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		.text-gray-700 {
			--tw-text-opacity: 1;
			color: rgb(55 65 81 / var(--tw-text-opacity));
		}
		
		.text-red-500 {
			--tw-text-opacity: 1;
			color: rgb(239 68 68 / var(--tw-text-opacity));
		}
		
		.transition-colors {
			transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
		}
		
		.hover\:text-cyan-500:hover {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		`,
			},
			{
				id: 2,
				size: "lg",
				html: `<nav class="bg-white flex items-center justify-between border-b border-gray-200 px-6 py-5 ">
				<div class="text-3xl font-bold tracking-wider text-cyan-500">
						TA<span class="text-gray-700">CO</span>
				</div>
				<ul class="group flex justify-center gap-4 ">
						<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Components</li>
						<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Templates</li>
				</ul>
		</nav>`,
				css: `
		*,
		::before,
		::after {
			box-sizing: border-box;
		
			border-width: 0;
		
			border-style: solid;
		
			border-color: #e5e7eb;
		}
		
		::before,
		::after {
			--tw-content: "";
		}
		
		html {
			line-height: 1.5;
		
			-webkit-text-size-adjust: 100%;
		
			-moz-tab-size: 4;
		
			-o-tab-size: 4;
			tab-size: 4;
		
			font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
				"Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		
			font-feature-settings: normal;
		
			font-variation-settings: normal;
		}
		
		body {
			margin: 0;
		
			line-height: inherit;
		}
		
		hr {
			height: 0;
		
			color: inherit;
		
			border-top-width: 1px;
		}
		
		abbr:where([title]) {
			-webkit-text-decoration: underline dotted;
			text-decoration: underline dotted;
		}
		
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: inherit;
			font-weight: inherit;
		}
		
		a {
			color: inherit;
			text-decoration: inherit;
		}
		
		b,
		strong {
			font-weight: bolder;
		}
		
		code,
		kbd,
		samp,
		pre {
			font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		
			font-size: 1em;
		}
		
		small {
			font-size: 80%;
		}
		
		sub,
		sup {
			font-size: 75%;
			line-height: 0;
			position: relative;
			vertical-align: baseline;
		}
		
		sub {
			bottom: -0.25em;
		}
		
		sup {
			top: -0.5em;
		}
		
		table {
			text-indent: 0;
		
			border-color: inherit;
		
			border-collapse: collapse;
		}
		
		button,
		input,
		optgroup,
		select,
		textarea {
			font-family: inherit;
		
			font-size: 100%;
		
			font-weight: inherit;
		
			line-height: inherit;
		
			color: inherit;
		
			margin: 0;
		
			padding: 0;
		}
		
		button,
		select {
			text-transform: none;
		}
		
		button,
		[type="button"],
		[type="reset"],
		[type="submit"] {
			-webkit-appearance: button;
		
			background-color: transparent;
		
			background-image: none;
		}
		
		:-moz-focusring {
			outline: auto;
		}
		
		:-moz-ui-invalid {
			box-shadow: none;
		}
		
		progress {
			vertical-align: baseline;
		}
		
		::-webkit-inner-spin-button,
		::-webkit-outer-spin-button {
			height: auto;
		}
		
		[type="search"] {
			-webkit-appearance: textfield;
		
			outline-offset: -2px;
		}
		
		::-webkit-search-decoration {
			-webkit-appearance: none;
		}
		
		::-webkit-file-upload-button {
			-webkit-appearance: button;
		
			font: inherit;
		}
		
		summary {
			display: list-item;
		}
		
		blockquote,
		dl,
		dd,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		figure,
		p,
		pre {
			margin: 0;
		}
		
		fieldset {
			margin: 0;
			padding: 0;
		}
		
		legend {
			padding: 0;
		}
		
		ol,
		ul,
		menu {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		
		textarea {
			resize: vertical;
		}
		
		input::-moz-placeholder,
		textarea::-moz-placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		input::placeholder,
		textarea::placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		button,
		[role="button"] {
			cursor: pointer;
		}
		
		:disabled {
			cursor: default;
		}
		
		img,
		svg,
		video,
		canvas,
		audio,
		iframe,
		embed,
		object {
			display: block;
		
			vertical-align: middle;
		}
		
		img,
		video {
			max-width: 100%;
			height: auto;
		}
		
		[hidden] {
			display: none;
		}
		
		*,
		::before,
		::after {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		::backdrop {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		.flex {
			display: flex;
		}
		
		.cursor-pointer {
			cursor: pointer;
		}
		
		.items-center {
			align-items: center;
		}
		
		.justify-center {
			justify-content: center;
		}
		
		.justify-between {
			justify-content: space-between;
		}
		
		.gap-4 {
			gap: 1rem;
		}
		
		.border-b {
			border-bottom-width: 1px;
		}
		
		.border-gray-200 {
			--tw-border-opacity: 1;
			border-color: rgb(229 231 235 / var(--tw-border-opacity));
		}
		
		.bg-white {
			--tw-bg-opacity: 1;
			background-color: rgb(255 255 255 / var(--tw-bg-opacity));
		}
		
		.px-6 {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		
		.py-5 {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
		
		.text-3xl {
			font-size: 1.875rem;
			line-height: 2.25rem;
		}
		
		.text-lg {
			font-size: 1.125rem;
			line-height: 1.75rem;
		}
		
		.font-bold {
			font-weight: 700;
		}
		
		.tracking-wider {
			letter-spacing: 0.05em;
		}
		
		.text-cyan-500 {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		.text-gray-700 {
			--tw-text-opacity: 1;
			color: rgb(55 65 81 / var(--tw-text-opacity));
		}
		
		.text-red-500 {
			--tw-text-opacity: 1;
			color: rgb(239 68 68 / var(--tw-text-opacity));
		}
		
		.transition-colors {
			transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
		}
		
		.hover\:text-cyan-500:hover {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		`,
			},
			{
				id: 3,
				size: "xl",
				html: `<nav class="bg-white flex items-center justify-between border-b border-gray-200 px-6 py-5 ">
						<div class="text-3xl font-bold tracking-wider text-cyan-500">
								TA<span class="text-gray-700">CO</span>
						</div>
						<ul class="group flex justify-center gap-4 ">
								<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Components</li>
								<li class="cursor-pointer transition-colors  hover:text-cyan-500 ">Templates</li>
						</ul>
				</nav>`,
				css: `
		*,
		::before,
		::after {
			box-sizing: border-box;
		
			border-width: 0;
		
			border-style: solid;
		
			border-color: #e5e7eb;
		}
		
		::before,
		::after {
			--tw-content: "";
		}
		
		html {
			line-height: 1.5;
		
			-webkit-text-size-adjust: 100%;
		
			-moz-tab-size: 4;
		
			-o-tab-size: 4;
			tab-size: 4;
		
			font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
				"Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
		
			font-feature-settings: normal;
		
			font-variation-settings: normal;
		}
		
		body {
			margin: 0;
		
			line-height: inherit;
		}
		
		hr {
			height: 0;
		
			color: inherit;
		
			border-top-width: 1px;
		}
		
		abbr:where([title]) {
			-webkit-text-decoration: underline dotted;
			text-decoration: underline dotted;
		}
		
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-size: inherit;
			font-weight: inherit;
		}
		
		a {
			color: inherit;
			text-decoration: inherit;
		}
		
		b,
		strong {
			font-weight: bolder;
		}
		
		code,
		kbd,
		samp,
		pre {
			font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
		
			font-size: 1em;
		}
		
		small {
			font-size: 80%;
		}
		
		sub,
		sup {
			font-size: 75%;
			line-height: 0;
			position: relative;
			vertical-align: baseline;
		}
		
		sub {
			bottom: -0.25em;
		}
		
		sup {
			top: -0.5em;
		}
		
		table {
			text-indent: 0;
		
			border-color: inherit;
		
			border-collapse: collapse;
		}
		
		button,
		input,
		optgroup,
		select,
		textarea {
			font-family: inherit;
		
			font-size: 100%;
		
			font-weight: inherit;
		
			line-height: inherit;
		
			color: inherit;
		
			margin: 0;
		
			padding: 0;
		}
		
		button,
		select {
			text-transform: none;
		}
		
		button,
		[type="button"],
		[type="reset"],
		[type="submit"] {
			-webkit-appearance: button;
		
			background-color: transparent;
		
			background-image: none;
		}
		
		:-moz-focusring {
			outline: auto;
		}
		
		:-moz-ui-invalid {
			box-shadow: none;
		}
		
		progress {
			vertical-align: baseline;
		}
		
		::-webkit-inner-spin-button,
		::-webkit-outer-spin-button {
			height: auto;
		}
		
		[type="search"] {
			-webkit-appearance: textfield;
		
			outline-offset: -2px;
		}
		
		::-webkit-search-decoration {
			-webkit-appearance: none;
		}
		
		::-webkit-file-upload-button {
			-webkit-appearance: button;
		
			font: inherit;
		}
		
		summary {
			display: list-item;
		}
		
		blockquote,
		dl,
		dd,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		figure,
		p,
		pre {
			margin: 0;
		}
		
		fieldset {
			margin: 0;
			padding: 0;
		}
		
		legend {
			padding: 0;
		}
		
		ol,
		ul,
		menu {
			list-style: none;
			margin: 0;
			padding: 0;
		}
		
		textarea {
			resize: vertical;
		}
		
		input::-moz-placeholder,
		textarea::-moz-placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		input::placeholder,
		textarea::placeholder {
			opacity: 1;
		
			color: #9ca3af;
		}
		
		button,
		[role="button"] {
			cursor: pointer;
		}
		
		:disabled {
			cursor: default;
		}
		
		img,
		svg,
		video,
		canvas,
		audio,
		iframe,
		embed,
		object {
			display: block;
		
			vertical-align: middle;
		}
		
		img,
		video {
			max-width: 100%;
			height: auto;
		}
		
		[hidden] {
			display: none;
		}
		
		*,
		::before,
		::after {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		::backdrop {
			--tw-border-spacing-x: 0;
			--tw-border-spacing-y: 0;
			--tw-translate-x: 0;
			--tw-translate-y: 0;
			--tw-rotate: 0;
			--tw-skew-x: 0;
			--tw-skew-y: 0;
			--tw-scale-x: 1;
			--tw-scale-y: 1;
			--tw-pan-x: ;
			--tw-pan-y: ;
			--tw-pinch-zoom: ;
			--tw-scroll-snap-strictness: proximity;
			--tw-ordinal: ;
			--tw-slashed-zero: ;
			--tw-numeric-figure: ;
			--tw-numeric-spacing: ;
			--tw-numeric-fraction: ;
			--tw-ring-inset: ;
			--tw-ring-offset-width: 0px;
			--tw-ring-offset-color: #fff;
			--tw-ring-color: rgb(59 130 246 / 0.5);
			--tw-ring-offset-shadow: 0 0 #0000;
			--tw-ring-shadow: 0 0 #0000;
			--tw-shadow: 0 0 #0000;
			--tw-shadow-colored: 0 0 #0000;
			--tw-blur: ;
			--tw-brightness: ;
			--tw-contrast: ;
			--tw-grayscale: ;
			--tw-hue-rotate: ;
			--tw-invert: ;
			--tw-saturate: ;
			--tw-sepia: ;
			--tw-drop-shadow: ;
			--tw-backdrop-blur: ;
			--tw-backdrop-brightness: ;
			--tw-backdrop-contrast: ;
			--tw-backdrop-grayscale: ;
			--tw-backdrop-hue-rotate: ;
			--tw-backdrop-invert: ;
			--tw-backdrop-opacity: ;
			--tw-backdrop-saturate: ;
			--tw-backdrop-sepia: ;
		}
		
		.flex {
			display: flex;
		}
		
		.cursor-pointer {
			cursor: pointer;
		}
		
		.items-center {
			align-items: center;
		}
		
		.justify-center {
			justify-content: center;
		}
		
		.justify-between {
			justify-content: space-between;
		}
		
		.gap-4 {
			gap: 1rem;
		}
		
		.border-b {
			border-bottom-width: 1px;
		}
		
		.border-gray-200 {
			--tw-border-opacity: 1;
			border-color: rgb(229 231 235 / var(--tw-border-opacity));
		}
		
		.bg-white {
			--tw-bg-opacity: 1;
			background-color: rgb(255 255 255 / var(--tw-bg-opacity));
		}
		
		.px-6 {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		
		.py-5 {
			padding-top: 1.25rem;
			padding-bottom: 1.25rem;
		}
		
		.text-3xl {
			font-size: 1.875rem;
			line-height: 2.25rem;
		}
		
		.text-lg {
			font-size: 1.125rem;
			line-height: 1.75rem;
		}
		
		.font-bold {
			font-weight: 700;
		}
		
		.tracking-wider {
			letter-spacing: 0.05em;
		}
		
		.text-cyan-500 {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		.text-gray-700 {
			--tw-text-opacity: 1;
			color: rgb(55 65 81 / var(--tw-text-opacity));
		}
		
		.text-red-500 {
			--tw-text-opacity: 1;
			color: rgb(239 68 68 / var(--tw-text-opacity));
		}
		
		.transition-colors {
			transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
		}
		
		.hover\:text-cyan-500:hover {
			--tw-text-opacity: 1;
			color: rgb(6 182 212 / var(--tw-text-opacity));
		}
		
		`,
			},
		],
	},
	{
		category: "buttons",
		components: [
			{
				id: 0,
				center: true,
				html: `<button
	class="relative isolate z-10 my-auto overflow-hidden rounded-lg border-[0.15rem] bg-slate-800 border-sky-100 px-6 py-[0.65rem] text-white transition-colors">
	Button
</button>`,
			},
		],
	},
];

export const categories = [
	{
		category: "Hero",
		items: ["Navbar", "Buttons", "breadcrumbs"],
	},
	{ category: "Scr", items: ["Footer", "Feature", "logos"] },
];
