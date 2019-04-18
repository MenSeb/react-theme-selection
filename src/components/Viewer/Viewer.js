import React from 'react'
import { ThemeModel } from '..'

export default function ThemeViewer ()
{
  return (
    <section className='ThemeViewer'>
      <section className='ViewerWrapper'>
        <h3 className='Title'>Theme Palette</h3>
        <ThemeModel />
        <p className='Text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus in justo aliquam, interdum turpis pharetra, aliquet magna.
          Mauris a gravida tortor. Nullam feugiat varius dictum.
          Integer consectetur, velit id condimentum molestie, quam mi faucibus massa, non tincidunt massa massa a turpis.
          Duis pulvinar massa vitae nulla dictum ultricies.
          Aliquam at mauris et arcu vehicula placerat hendrerit sed nulla.
          Vivamus aliquam, lectus pellentesque elementum maximus, mauris leo feugiat arcu, quis venenatis augue felis id odio.
          Pellentesque facilisis lacus vitae ipsum maximus, ut convallis nisi tempus.
          Sed quis lobortis magna. Maecenas dignissim, enim vitae posuere semper, purus eros fringilla felis, sit amet convallis magna libero ac est.
          Etiam sapien odio, pharetra vel sapien nec, faucibus commodo lectus.
          Morbi at diam id quam pellentesque vehicula. Vestibulum vitae pharetra lectus.
          Donec bibendum dictum felis, ut sollicitudin odio tincidunt et.
          Phasellus malesuada enim sem, ac blandit ex condimentum nec.
          Nunc dapibus sem vitae justo semper laoreet. Suspendisse potenti.
          Donec vulputate rutrum augue, vitae iaculis massa sollicitudin ut.
          Sed et venenatis arcu, a sagittis tellus.
        </p>
      </section>
    </section>
  )
}