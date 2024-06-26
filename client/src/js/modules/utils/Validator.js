import ApiError from "../ApiError/ApiError";

export default function (form) {

        const inputs = Array.from(form.querySelectorAll('.form-control')); 
        const user_data = {};
        inputs.forEach(input => user_data[`${input.getAttribute('name')}`] = input.value);

        const errors = [];
        const errorMessages = {
                name: "Invalid name",
                subject: "Invalid subject name",
                phone: "Invalid phone.Look at the correct format: +445566778899",
                email: "Invalid email"
        }

        if(Object.keys(user_data).length > 3){
                if (!user_data["name"] ||  user_data["name"].length < 2 || user_data["name"].length > 30) {
                        errors.push(errorMessages.name);
                }
                const phonePattern = /^\+[1-9]\d{1,14}$/; // Международный формат E.164
            
                if (!user_data["phone"] || !phonePattern.test(user_data["phone"])) {
                        errors.push(errorMessages.phone);
                }
                if (!user_data["email"].trim()) {
                        errors.push(errorMessages.email);
                }
                if (!user_data["subject"] ||  user_data["subject"].length < 2 || user_data["subject"].length > 30) {
                        errors.push(errorMessages.subject);
            }
        }else if(Object.keys(user_data).length === 3) {
                if (!user_data["name"] || user_data["name"].length < 2 || user_data["name"].length > 30) {
                        errors.push(errorMessages.name);
                }
                const phonePattern = /^\+[1-9]\d{1,14}$/; // Международный формат E.164
            
                if (!user_data["phone"] || !phonePattern.test(user_data["phone"])) {
                        errors.push(errorMessages.phone);
                }
                if (!user_data["email"].trim()) {
                        errors.push(errorMessages.email);
                }
        }

        return [user_data, errors];
   
}