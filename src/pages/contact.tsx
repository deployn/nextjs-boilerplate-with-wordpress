import { FormProvider, useForm } from 'react-hook-form';

import Layout from '@/components/Layout';

const ErrorMessage = ({ errors, name }: any) =>
  errors[name] && <span className="text-red-500">{errors[name].message}</span>;

export default function Contact() {
  const methods = useForm();
  const {
    clearErrors,
    formState: { errors, isValidating, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    register,
    setError,
  } = methods;

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        return true;
      }
      const json = await response.json();
      if (json.error) {
        throw json.error;
      }
    } catch (error: any) {
      setError('form', {
        message: error,
      });
      return false;
    }
    return false;
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
        Contact
      </h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-4 mb-8">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              className="w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register('message', { required: true })}
              className="w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            />
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || isValidating || isSubmitSuccessful}
            onClick={() => {
              clearErrors();
            }}
            className="rounded bg-primary-500 py-2 px-4 font-bold text-white hover:bg-primary-700 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </FormProvider>

      <ErrorMessage errors={errors} name="form" />

      {isSubmitSuccessful && <p className="text-green-500">Success!</p>}
    </Layout>
  );
}
