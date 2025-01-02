// use of layout for product page such that every time product page is rendered, it will only load layput page once.

export default function ProductLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
            <div>
                <h2>Featured Product Section</h2>
            </div>
        </div>
    )
}