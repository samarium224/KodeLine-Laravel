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
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    return (
        <GuestLayout>
            <Head title="Shipping Address" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div style={{ marginBottom: "8px" }}>
                <InputLabel htmlFor="address" value="Address" />
                <div style={{ marginBottom: "8px" }}>
                    <InputLabel htmlFor="address" value="Address" />

                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        autoComplete="address"
                        isFocused={true}
                        onChange={(e) => setData("address", e.target.value)}
                    />
                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        autoComplete="address"
                        isFocused={true}
                        onChange={(e) => setData("address", e.target.value)}
                    />

                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div style={{ marginBottom: "8px" }}>
                    <InputLabel htmlFor="city" value="City" />
                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div style={{ marginBottom: "8px" }}>
                    <InputLabel htmlFor="city" value="City" />

                    <TextInput
                        id="city"
                        type="text" // Change the type to "tel"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-full"
                        autoComplete="city"
                        isFocused={true}
                        onChange={(e) => setData("city", e.target.value)}
                    />
                    <TextInput
                        id="city"
                        type="text" // Change the type to "tel"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-full"
                        autoComplete="city"
                        isFocused={true}
                        onChange={(e) => setData("city", e.target.value)}
                    />

                    <InputError message={errors.city} className="mt-2" />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "24px",
                    }}
                >
                    <div style={{ marginBottom: "8px" }}>
                        <InputLabel htmlFor="state" value="State" />
                        <InputError message={errors.city} className="mt-2" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "24px",
                        }}
                    >
                        <div style={{ marginBottom: "8px" }}>
                            <InputLabel htmlFor="state" value="State" />

                            <TextInput
                                id="state"
                                type="text" // Change the type to "tel"
                                name="state"
                                value={data.state}
                                className="mt-1 block w-full"
                                autoComplete="tel"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("state", e.target.value)
                                }
                            />
                            <TextInput
                                id="state"
                                type="text" // Change the type to "tel"
                                name="state"
                                value={data.state}
                                className="mt-1 block w-full"
                                autoComplete="tel"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("state", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.state}
                                className="mt-2"
                            />
                        </div>
                        <div style={{ marginBottom: "8px" }}>
                            <InputLabel
                                htmlFor="postal_code"
                                value="Postal code"
                            />
                            <InputError
                                message={errors.state}
                                className="mt-2"
                            />
                        </div>
                        <div style={{ marginBottom: "8px" }}>
                            <InputLabel
                                htmlFor="postal_code"
                                value="Postal code"
                            />

                            <TextInput
                                id="postal_code"
                                type="tel" // Change the type to "tel"
                                name="postal_code"
                                value={data.postal_code}
                                className="mt-1 block w-full"
                                autoComplete="tel"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("postal_code", e.target.value)
                                }
                            />
                            <TextInput
                                id="postal_code"
                                type="tel" // Change the type to "tel"
                                name="postal_code"
                                value={data.postal_code}
                                className="mt-1 block w-full"
                                autoComplete="tel"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("postal_code", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.postal_code}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: "8px" }}>
                        <InputLabel htmlFor="phone" value="Phone" />
                        <InputError
                            message={errors.postal_code}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div style={{ marginBottom: "8px" }}>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="tel" // Change the type to "tel"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        isFocused={true}
                        onChange={(e) => setData("phone", e.target.value)}
                    />
                    <TextInput
                        id="phone"
                        type="tel" // Change the type to "tel"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="tel"
                        isFocused={true}
                        onChange={(e) => setData("phone", e.target.value)}
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>
                <InputError message={errors.phone} className="mt-2" />
            </div>

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
