import emailjs from "@emailjs/browser";


export const sendEmail = async (form) => {

    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
                name: form.name,
                email: form.email,
                message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
};