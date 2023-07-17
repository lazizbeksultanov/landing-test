export const Button = ({ children, variant, size, responsivewfull }) => {
  return (
    <button
      className={[
        variant === 'solid'
          ? 'bg-primary-600 text-white'
          : variant === 'outline'
          ? 'border border-gray-300 bg-white text-gray-700'
          : variant === 'empty'
          ? 'text-gray-500'
          : variant === 'primary'
          ? 'bg-primary-50'
          : '',
        'rounded-lg',
        responsivewfull === true && 'w-full md:w-auto',
        '',
        size === 'sm'
          ? 'text-xs'
          : size === 'md'
          ? 'px-5 py-3 text-base'
          : size === 'lg'
          ? 'px-7 py-4 text-lg'
          : size === 'w-full'
          ? 'w-full py-3 text-base'
          : 'px-4 py-2.5 text-base',
      ].join(' ')}
    >
      {children}
    </button>
  )
}
