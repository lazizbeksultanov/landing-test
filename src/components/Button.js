export const Button = ({ children, variant, size }) => {
  return (
    <button
      className={[
        variant === 'solid'
          ? 'bg-primary-600 text-white'
          : variant === 'outline'
          ? 'border border-gray-300 bg-white text-gray-700'
          : variant === 'empty'
          ? 'text-gray-500'
          : '',
        'rounded-lg font-semibold',
        size === 'sm'
          ? 'text-xs'
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
