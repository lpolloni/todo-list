function Input(props) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}
    />
  );
}

export default Input;

// <input
//       type={props.type}
//       placeholder={props.placeholder}
//       className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
//       value={props.title}
//       onChange={props.onChange}
//     />
