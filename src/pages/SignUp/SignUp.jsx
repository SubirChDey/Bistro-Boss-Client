import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            console.log('profile updated')
            reset();
          })
          .catch(error => console.log(error))
        
          Swal.fire({
            title: "Account created!",
            text: "Successfully created account!",
            icon: "success"

          });
        navigate(location?.state ? location.state : '/');
      })
  };



  console.log(watch("password"));

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title> Sign up | Bistro Boss</title>
      </Helmet>
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
              {errors.name?.type === 'minLength' && <p className="text-red-500" role="alert">Name should be minimum 3 charecter</p> || errors.name && <span className="text-red-500">Name is required</span>}

              <label className="fieldset-label">Photo URL</label>
              <input type="url" {...register("photoUrl", { required: true })} name="photoUrl" className="input" placeholder="Photo URL" />
              {errors.photoUrl?.type === 'minLength' && <p className="text-red-500" role="alert">Photo URL should be a valid URL</p> || errors.name && <span className="text-red-500">Name is required</span>}


              <label className="fieldset-label">Email</label>
              <input type="email" {...register("email", { required: true })} name="email" className="input" placeholder="Email" />
              {errors.email && <span className="text-red-500">Email is required</span>}

              <label className="fieldset-label">Password</label>
              <input type="password" {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                // pattern: /^[A-Za-z]+$/i 
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

              })} name="password" className="input" placeholder="Password" />
              {errors.password?.type === 'required' && <p className="text-red-500" role="alert">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-500" role="alert">Password should be minimum 6 character</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-500" role="alert">Password should be maximum 20 character</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-500" role="alert">Must be Right Patern</p>}

              <div><a className="link link-hover">Forgot password?</a></div>
              <input className="btn btn-neutral mt-4" type="submit" value="Sign up" />

            </fieldset>
          </div>
          <p><small>Allready have an account? <Link to={'/login'} className="text-green-600" >Login Here</Link></small></p>
        </form>
      </div>

    </div>
  )
}

export default SignUp