// src/pages/route/sections/places/RoutePlaceDetailsCardContainer.tsx
import type { PlaceDetails } from '@/entities/place'
import PlaceDetailsCard from '@/entities/place/ui/PlaceDetailsCard'

const DEFAULT_PLACE_IMAGE = 'place.jpg';

interface RoutePlaceDetailsCardContainerProps {
    place: PlaceDetails
    onCardClick?: (placeId: string) => void
}

export default function RoutePlaceDetailsCardContainer({ place, onCardClick }: RoutePlaceDetailsCardContainerProps) {
    const imageUrl = place.image || DEFAULT_PLACE_IMAGE;
    
    return (
        <div className="flex flex-col gap-6 w-full">
            <PlaceDetailsCard
                key={place.id}
                id={place.id}
                title={place.title}
                description={place.description}
                reviewsCount={place.reviewsCount}
                rating={place.rating}
                verifiedDate={place.verifiedDate}
                image={imageUrl}
                badgeTypes={place.badgeTypes}
                city={place.city}
                button={{
                    variant: 'primary',
                    title: 'Подробнее',
                    onClick: () => onCardClick?.(place.id),
                }}
            />
        </div>
    )
}