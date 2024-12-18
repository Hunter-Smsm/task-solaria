import { useContext, useEffect, useState } from "react";
import image from "./assets/0-floor.png";
import Filter from "./components/Filter/Filter";
import { SVGContext } from "./context/SharingData";
import PolygonDetails from "./components/PolygonDetails/PolygonDetails";
import Loading from "./components/Loading/Loading";

function App() {
	const svgElement = useContext(SVGContext);
	const [loading, setLoading] = useState(true);
	// Replace the svg holder with the svg element when it is fetched
	useEffect(() => {
		if (svgElement) {
			const svgHolder: Element | null =
				document.querySelector("main .svg-holder");
			svgHolder && svgHolder.replaceWith(svgElement);
		}
	}, [svgElement]);

	return (
		<main
			onLoad={() => {
				setLoading(false);
			}}
		>
			{loading && svgElement && <Loading />}
			<img src={image} />
			<svg className="svg-holder"></svg>
			<Filter />
			<PolygonDetails />
		</main>
	);
}

export default App;
