import { createClient } from '@supabase/supabase-js'
import { useFormik } from 'formik';
import { useRouter } from 'next/router'
import { useSession } from '@supabase/auth-helpers-react'
import { Database } from '../../types/supabase'
//import supabase  from '../../utils/supabase'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

//const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! )
//const supabaseClient = createBrowserSupabaseClient<Database>()
export default function Login() {
    const router = useRouter();
	const supabaseClient = useSupabaseClient<Database>()
	const session = useSession()
console.log(session)
	if (session) {
        router.push('/')
	}
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit
    })
   
 async function onSubmit(values:any){
        const { data, error } = await supabaseClient.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        })
        if (data) router.push('/')
      }


	return (
		<div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<div className="mx-auto flex items-center justify-center">
					<a href="#">
						<span className="sr-only">AutoFlow</span>
						<img className="object-scale-down h-[43px] w-[183px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"/>
					</a>
				</div>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div
					className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
					style={{ position: "relative" }}
				> 
					<form className="space-y-6" method="post" onSubmit={formik.handleSubmit}>
						<div
							className="flex gap-1 flex-col"
							style={{ position: "relative" }}
						>
							<div className="flex justify-between">
								<label
									htmlFor="email"
									className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
								>
									{" "}
									E-mail address
								</label>
							</div>
							<div className="flex flex-col gap-2">
								<div className="relative flex rounded-md shadow-sm">
									<div className="relative w-full">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

										<input
											type="text"
                                            {...formik.getFieldProps('email')}
											name="email"
											id="email"
                                            autoComplete="email"
											className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
											placeholder=""
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							className="flex gap-1 flex-col"
							style={{ position: "relative" }}
						>
							<div className="flex justify-between">
								<label
									htmlFor="password"
									className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
								>
									{" "}
									Password
								</label>
							</div>
							<div className="flex flex-col gap-2">
								<div className="relative flex rounded-md shadow-sm">
									<div className="relative w-full">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

										<input
											type="password"
                                            {...formik.getFieldProps('password')}
											name="password"
											id="password" autoComplete='current-password'
											className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
											placeholder=""
										/>

										<div className="absolute inset-y-0 right-0 flex items-center pr-3">
											<button
												type="button"
												className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-transparent bg-transparent text-gray-500 hover:bg-gray-50 active:bg-gray-100 px-2.5 py-1 text-xs !px-1 -mr-1.5"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
													className="w-5 h-5"
												>
													<path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"></path>
													<path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"></path>
													<path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"></path>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									type="checkbox"
									className="form-checkbox block h-4 w-4 cursor-pointer rounded border border-gray-300 text-primary-600 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2"
									name="remember-me"
									id="remember-me"
								/>

								<label
									htmlFor="remember-me"
									className="ml-2 block cursor-pointer text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>
						</div>
						<button
							type="submit"
							className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-transparent text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 shadow-sm px-4 py-2 text-sm w-full"
						>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
