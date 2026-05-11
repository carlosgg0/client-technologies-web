import { useState } from "react";
import { initialTravelPlan } from "./places";

export default function TravelPlan() {

    const [plan, setPlan] = useState(initialTravelPlan);

    const parent = plan[0];
    const planetIds = parent.childIds;

    return (
        <>
            <h1>Lugares a visitar</h1>
            <ol>
                {planetIds.map(id => (
                    <PlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                    />
                ))}
            </ol>
        </>
    );
}

function PlaceTree({ id, placesById }) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
        <li>
            {place.title}
            {childIds.length > 0 &&
                <ol>
                    {childIds.map(childId => (
                        <PlaceTree
                            key={childId}
                            id={childId}
                            placesById={placesById}
                        />
                    ))}
                </ol>
            }

        </li>
    )
}