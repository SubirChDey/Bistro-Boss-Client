import { useForm } from "react-hook-form";

const SignUp = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("password"));

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sin up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input type="text" {...register("name", { required: true, minLength: 3, maxLength: 20 })} name="name" className="input" placeholder="Name" />
              {errors.name?.type === 'minLength' && <p className="text-red-500" role="alert">Name should be minimum 3 charecter</p> ||errors.name && <span className="text-red-500">Name is required</span>}
              
              
              <label className="fieldset-label">Email</label>
              <input type="email" {...register("email", { required: true})} name="email" className="input" placeholder="Email" /> 
              {errors.email && <span className="text-red-500">Email is required</span>}             

              <label className="fieldset-label">Password</label>
              <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} name="password" className="input" placeholder="Password" />
              {errors.password?.type === 'required' && <p className="text-red-500" role="alert">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-500" role="alert">Password should be minimum 6 character</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-500" role="alert">Password should be maximum 12 character</p>}

              <div><a className="link link-hover">Forgot password?</a></div>
              <input className="btn btn-neutral mt-4" type="submit" value="Sign up" />
              
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp