import React from 'react'
import './spinner.component.scss'

export const Spinner = (props) => {
  let { containerHeight, containerWidth, spinnerHeight, spinnerWidth, noBackdrop, autoContainer } = props
  containerHeight = containerHeight ?? 'calc(100vh - 70px)'
  containerWidth = containerWidth ?? '100%'

  spinnerHeight = spinnerHeight ?? '120px'
  spinnerWidth = spinnerWidth ?? '120px'
  return (
    <div className='spinner-wrap'
         style={!autoContainer ? { height: containerHeight, width: containerWidth } : null}>
      <svg
        className='spinner'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        width={spinnerHeight}
        height={spinnerWidth}
        viewBox='0 0 512 512'
      >
        <path
          fill='#5083B3'
          d='M256.011 0c-12.852 0-23.273 10.42-23.273 23.273v93.091c0 12.854 10.421 23.274 23.273 23.274 12.853 0 23.272-10.421 23.272-23.274v-93.091c0-12.853-10.419-23.273-23.272-23.273z'
        ></path>
        <path
          fill='#AE56D9'
          opacity='0.4'
          d='M256.011 372.363c-12.852 0-23.273 10.421-23.273 23.272v93.091c0 12.853 10.421 23.274 23.273 23.274 12.853 0 23.272-10.421 23.272-23.274v-93.091c0-12.853-10.419-23.272-23.272-23.272z'
        ></path>
        <path
          fill='#C91E64'
          opacity='0.8'
          d='M173.725 140.809l-65.826-65.828c-9.086-9.089-23.822-9.089-32.912 0-9.089 9.089-9.089 23.824 0 32.912l65.826 65.828c4.544 4.544 10.5 6.816 16.455 6.816s11.912-2.273 16.455-6.816c9.090-9.089 9.090-23.823 0.001-32.912z'
        ></path>
        <path
          fill='#C91E64'
          opacity='0.1'
          d='M459.806 232.727h-46.546c-12.853 0-23.272 10.421-23.272 23.273 0 12.853 10.419 23.272 23.272 23.272h46.546c12.853 0 23.272-10.419 23.272-23.273 0-12.852-10.421-23.273-23.272-23.273z'
        ></path>
        <path
          fill='#AE56D9'
          opacity='0.3'
          d='M365.557 338.281c-9.087-9.089-23.823-9.087-32.913 0-9.088 9.089-9.087 23.823 0 32.913l65.828 65.825c4.544 4.544 10.502 6.817 16.457 6.817 5.957 0 11.913-2.274 16.455-6.817 9.089-9.089 9.089-23.825 0-32.913l-65.828-65.825z'
        ></path>
        <path
          fill='#5083B3'
          opacity='0.6'
          d='M139.637 256c0-12.852-10.421-23.273-23.273-23.273h-93.091c-12.853 0-23.273 10.421-23.273 23.273 0 12.853 10.42 23.272 23.273 23.272h93.091c12.852 0 23.273-10.419 23.273-23.273z'
        ></path>
        <path
          fill='#5083B3'
          opacity='0.5'
          d='M173.735 338.283c-9.087-9.089-23.825-9.089-32.912 0l-65.825 65.825c-9.089 9.087-9.089 23.825 0 32.913 4.544 4.544 10.501 6.815 16.457 6.815s11.913-2.271 16.455-6.815l65.825-65.825c9.089-9.087 9.089-23.822 0-32.911z'
        ></path>
      </svg>
      {!noBackdrop ? <div className='spinner-overlay'></div> : null}
    </div>
  )
}
export default Spinner
