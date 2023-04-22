import {
  Viewer,
  Cesium3DTileset,
  PolylineCollection,
  Polyline,
  Globe,
  Cesium3DTilesetGraphics,
} from "resium";
import {
  Ion,
  Cartesian3,
  MapboxStyleImageryProvider,
  OpenStreetMapImageryProvider,
  createWorldTerrain,
  IonResource,
} from "cesium";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Aircrafts from "./Aircrafts";
import { useEffect, useState } from "react";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMDdjMTY0MS0wNzdmLTRiMDYtOTZjMC1lYWZmNDRkMTFkZGEiLCJpZCI6MTMzODc4LCJpYXQiOjE2ODE2NTc2MjZ9.kezB6WeKZ_sK0rYhwKv9LfN0u7VjhTG1g4NGIDhstaw";

mapboxgl.accessToken =
  "pk.eyJ1Ijoianl1bmlnaHR4IiwiYSI6ImNreGIwZ2s0dTFiOW8ydHFoeHRsMXo0N3IifQ.Gg5TBc5YAYsz1FTxP06LNg";

const mapbox = new MapboxStyleImageryProvider({
  styleId: "satellite-streets-v12",
  accessToken:
    "pk.eyJ1Ijoianl1bmlnaHR4IiwiYSI6ImNreGIwZ2s0dTFiOW8ydHFoeHRsMXo0N3IifQ.Gg5TBc5YAYsz1FTxP06LNg",
});





export  default function Cesium() {
  const [tileset, setTileset] = useState<IonResource|null>(null)
  const cartagenaPosition = Cartesian3.fromDegrees(-75.5541, 10.425,400);
  const mexicoPosition = Cartesian3.fromDegrees(-99.1276, 19.4326);

  const cesiumWorldTerrain = createWorldTerrain();

  const viwerOptions = {
    sceneModePicker: true,
    selectionIndicator: false,
    baseLayerPicker: false,
    timeline: true,
    animation: false,
  };

  useEffect(() => {
    async function loadTile() {
      try {
        setTileset(await IonResource.fromAssetId(96188))
      } catch (error) {
        console.error(`Error creating tileset: ${error}`);
      }
    }
    loadTile()
  }, [])
  

  
  return (
    <Viewer
      full
      imageryProvider={mapbox}
      terrainProvider={cesiumWorldTerrain}
      {...viwerOptions}
    >
      <Cesium3DTileset url={tileset}/>
      <Globe enableLighting={false} dynamicAtmosphereLighting={true} />
      <PolylineCollection>
        <Polyline positions={[cartagenaPosition, mexicoPosition]} width={4} />
      </PolylineCollection>
      <Aircrafts />
    </Viewer>
  );
}
