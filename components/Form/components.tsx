export const Input = ({ type, label, variable, register, required, errors }) => (
  <div>
    <label className='font-semibold'>
      {label}
      {!required && <span className='text-gray-400'> (optional)</span>}
    </label>
    <input
      type={type}
      {...register(variable, {required})}
      className={
        'w-full px-2 rounded border-2 focus:border-accent-primary focus:outline-none '
        + (type === 'date' ? 'py-1.5 ' : 'py-1 ')
        + (errors[variable] ? 'border-red-500' : 'border-gray-300')
      }
    />
  </div>
)

export const TextArea = ({ label, variable, register, required, errors }) => (
  <div>
    <label className='font-semibold'>
      {label}
      {!required && <span className='text-gray-400'> (optional)</span>}
    </label>
    <textarea
      {...register(variable, {required})}
      className={
        'w-full px-2 py-1.5 rounded border-2 focus:border-accent-primary focus:outline-none '
        + (errors[variable] ? 'border-red-500' : 'border-gray-300')
      }
    />
  </div>
)

export const Select = ({ label, variable, register, required, options, errors }) => (
  <div>
    <label className='font-semibold'>{label}</label>
    <select
      {...register(variable, {required})}
      className={
        'w-full px-2 py-1.5 rounded border-2 focus:border-accent-primary focus:outline-none overflow-ellipsis '
        + (errors[variable] ? 'border-red-500' : 'border-gray-300')
      }
      
    >
      <option 
        value=''
        disabled
        selected
        hidden
      >
        Select your {label.toLowerCase()}...
      </option>
      {
        options.map((option) =>
          <option value={option}>{option}</option>
        )
      }
    </select>
  </div>
)

export const Checkbox = ({ register, label, variable, options }) => (
  <div>
    <legend className='font-semibold'>{label}</legend>
    <div className='flex flex-col gap-2 pl-2'>
      {
        options.map((option) =>
          <div id={label} className='flex items-center gap-2'>
            <input
              type='checkbox'
              id={variable.toString() + option.toString()}
              value={option}
              {...register(variable)}
              className='cursor-pointer'
            />
            <label
              htmlFor={variable.toString() + option.toString()}
              className='cursor-pointer'
            >
              {option}
            </label>
          </div>
        )
      }
    </div>
  </div>
)

export const Radio = ({ register, label, variable, required, options, errors }) => (
  <div>
    <legend className='font-semibold'>{label}</legend>
    <div className='flex flex-col gap-2 pl-2'>
      {
        options.map((option) =>
          <div id={label} className='flex items-center gap-2'>
            <input
              type='radio'
              id={variable.toString() + option.toString()}
              value={option}
              {...register(variable, {required})}
              className={
                'cursor-pointer ' + (errors[variable] && 'border-red-500')
              }
            />
            <label
              htmlFor={variable.toString() + option.toString()}
              className={
                'cursor-pointer ' + (errors[variable] && 'text-red-500')
              }
            >
              {option}
            </label>
          </div>
        )
      }
    </div>
  </div>
)