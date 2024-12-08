// Nested Layout

function getRandom(count: number) {
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({ children, }: {
    children: React.ReactNode
}) {
    const random = getRandom(2);
    if (random === 1) {
        throw new Error('Error while loading product');
    }
    return (
        <>
            {children}
            <h2>Features products</h2>
            {/* Carousel Here */}
        </>
    );
}