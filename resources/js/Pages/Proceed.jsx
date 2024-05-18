import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { Button, useTheme } from "@mui/material";

export default function Login({ status }) {
    const theme = useTheme();
    const { data, setData, post, processing, errors, reset } = useForm({
        address: "",
        city: "",
        state: "",
        postal_code: "",
        phone: "",
        special_note: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleChange = (field) => (e) => {
        setData(field, e.target.value);
    };

    const renderInput = (
        id,
        label,
        type = "text",
        placeholder,
        autoComplete = id
    ) => (
        <div style={{ marginBottom: "8px" }}>
            <InputLabel htmlFor={id} value={label} />
            <TextInput
                id={id}
                type={type}
                name={id}
                placeholder={placeholder}
                value={data[id]}
                className="mt-1 block w-full"
                autoComplete={autoComplete}
                onChange={handleChange(id)}
            />
            <InputError message={errors[id]} className="mt-2" />
        </div>
    );

    return (
        <GuestLayout>
            <Head title="Shipping Address" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            {renderInput("address", "Address*", "text", "Address", "address")}
            {renderInput("city", "City", "text", "City (Optional)", "city")}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "24px",
                }}
            >
                {renderInput(
                    "state",
                    "State",
                    "text",
                    "State (Optional)",
                    "state"
                )}
                {renderInput(
                    "postal_code",
                    "Postal Code*",
                    "text",
                    "Postal Code",
                    "postal_code"
                )}
            </div>
            {renderInput("phone", "Phone*", "tel", "Phone", "phone")}
            {renderInput(
                "special_note",
                "Special Note",
                "text",
                "Special Note (Optional)",
                "special_note"
            )}

            <div className="flex items-center flex-col justify-center mt-4 w-full">
                <Button
                    onClick={() => post(route("checkout"))}
                    sx={{
                        mb: 3,
                        my: 1,
                        py: 1.75,
                        fontSize: "0.9rem",
                        textTransform: "uppercase",
                        color: "#fafafa",
                        width: "100%",
                        backgroundColor: "#53555a",
                        "&:hover": {
                            backgroundColor: "#3e4044",
                        },
                    }}
                >
                    Proceed to Checkout
                </Button>
            </div>
        </GuestLayout>
    );
}
