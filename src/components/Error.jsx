
const Error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white font-bold mb-3 rounded-sm text-center p-3 uppercase">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error