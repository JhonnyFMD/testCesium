import { Entity, BoxGraphics, EllipsoidGraphics, ModelGraphics } from "resium";
import {
  Cartesian3,
  Color,
  Transforms,
  HeightReference,
  ConstantProperty,
  Math,
  HeadingPitchRoll,
} from "cesium";
import "mapbox-gl/dist/mapbox-gl.css";
const modelUri = "/models/aircraft.glb";
const modelUri2 = "/models/aircraft3.glb";

function Aircrafts() {
  const cartagenaPosition = Cartesian3.fromDegrees(-75.5541, 10.425, 400);
  const cartagenaPosition2 = Cartesian3.fromDegrees(-75.4541, 10.425, 400);
  const cartagenaPosition3 = Cartesian3.fromDegrees(-75.5125, 10.4473, 0);

  const heading = Math.toRadians(180);
  const pitch = 0;
  const roll = 0;
  const hpr = new HeadingPitchRoll(heading, pitch, roll);
  const rotation = Transforms.headingPitchRollQuaternion(
    cartagenaPosition3,
    hpr
  );
  const orientation = new ConstantProperty(rotation);

  const description = (
    <div>
      Esta es mi entidad.<br />
      Aquí hay una segunda línea.
    </div>
  );

  return (
    <>
      <Entity
        position={cartagenaPosition}
        description="Aircraft #1"
      >
        <BoxGraphics
          dimensions={new Cartesian3(200, 200, 200)}
          material={Color.BLUE.withAlpha(0.1)}
          outline={true}
          outlineColor={Color.BLUE}
          outlineWidth={2.0}
        />
        <EllipsoidGraphics
          radii={new Cartesian3(100, 100, 100)}
          material={Color.RED.withAlpha(0.1)}
          outline={true}
          outlineColor={Color.RED}
          outlineWidth={2}
          heightReference={HeightReference.NONE}
          show={true}
        />
        <ModelGraphics
          uri={modelUri}
          scale={10}
          minimumPixelSize={128}
          maximumScale={100000}
        />
      </Entity>

      <Entity position={cartagenaPosition2}>
        <BoxGraphics
          dimensions={new Cartesian3(200, 200, 200)}
          material={Color.BLUE.withAlpha(0.1)}
          outline={true}
          outlineColor={Color.BLUE}
          outlineWidth={2.0}
        />
        <EllipsoidGraphics
          radii={new Cartesian3(100, 100, 100)}
          material={Color.RED.withAlpha(0.1)}
          outline={true}
          outlineColor={Color.BLACK}
          outlineWidth={2}
          heightReference={HeightReference.NONE}
          show={true}
        />
        <ModelGraphics
          uri={modelUri2}
          scale={1}
          minimumPixelSize={128}
          maximumScale={10000}
        />
      </Entity>
      <Entity position={cartagenaPosition3} orientation={orientation}>
        <BoxGraphics
          dimensions={new Cartesian3(200, 200, 200)}
          material={Color.BLUE.withAlpha(0.1)}
          outline={true}
          outlineColor={Color.BLUE}
          outlineWidth={2.0}
        />
        <EllipsoidGraphics
          radii={new Cartesian3(100, 100, 100)}
          material={Color.RED.withAlpha(0.1)}
          outline={true}
          outlineColor={Color.BLACK}
          outlineWidth={2}
          heightReference={HeightReference.NONE}
          show={true}
        />
        <ModelGraphics
          uri={modelUri2}
          scale={1}
          minimumPixelSize={128}
          maximumScale={10000}
        />
      </Entity>
    </>
  );
}

export default Aircrafts;
