import { Footer, Gallery, Navbar } from '@/components'
import React from 'react'

const GalleryPage = () => {
    return (
        <div>
            <Navbar isSel={"gallery"} />
            <div style={{ marginTop: "93px" }}>
                <Gallery />
                <Footer />
            </div>
        </div>
    )
}

export default GalleryPage