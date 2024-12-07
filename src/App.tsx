import { useContext, useEffect } from "react";
import image from "./assets/0-floor.png";
import Filter from "./components/Filter/Filter";
import { dataContext } from "./context/SharingData";
import PolygonDetails from "./components/PolygonDetails/PolygonDetails";

function App() {
	const { svgElement } = useContext(dataContext);

	// Replace the svg holder with the svg element when it is fetched
	useEffect(() => {
		if (svgElement) {
			const svgHolder: SVGElement = document.querySelector(
				"main .svg-holder"
			) as SVGElement;
			svgHolder && svgHolder.replaceWith(svgElement as HTMLElement);
		}
	}, [svgElement]);

	return (
		<main>
			<img src={image} />
			<svg className="svg-holder"></svg>
			<Filter />
			<PolygonDetails />
		</main>
	);
}

export default App;
