import { useForm } from 'react-hook-form';

function Form() {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <>
            <h2>Вход</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Адрес эл. почты
                    <input placeholder='Введите ваш адрес эл. почты...'
                        {...register('firstName', {
                            required: 'Введите что то',
                            minLength: {
                                value: 3,
                                message: 'Минимум 3 символа'
                            }
                        })} />
                </label>

                <label>
                    Пароль
                    <input
                        placeholder='Введите свой пароль...'
                        {...register('test', {
                        })} />

                </label>

                <div>
                    {errors?.firstName && <p>{errors?.firstName?.message || 'error'}</p>}
                </div>

                <input type="submit" value='Вход' />
            </form>
        </>
    );
}

export default Form;
