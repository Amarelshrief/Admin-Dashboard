import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  age: z.coerce
    .number()
    .positive()
    .gte(0, { message: "The value must be greater than 0" }),
  contact_number: z
    .string()
    .regex(/01[0-2]\d{1,8}$/, {
      message:
        "Invalid phone number format. Please provide a valid phone number with the +20 country code.",
    })
    .trim(),
  email: z
    .string()
    .email({
      message: "Invalid email format. Please provide a valid email address.",
    })
    .trim(),
  address_1: z.string().min(2, {
    message: "Address 1 must be at least 2 characters.",
  }),
  address_2: z.string().min(2, {
    message: "Address 2 must be at least 2 characters.",
  }),
  role: z.string().min(2, {
    message: "Please select a role.",
  }),
  city: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

function UserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      age: 0,
      contact_number: "",
      address_1: "",
      address_2: "",
      role: "",
      city: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Submitted");
    console.log(values);
  }

  return (
    <section>
      <div>
        <h1 className="text-3xl font-bold">Create User </h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>Create a New User Profile</p>
      </div>
      <div>
        <div className="h-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="flex items-center justify-between gap-x-4 mt-4 h-full">
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            className="p-6 h-full rounded-none focus:border-none w-full amm@shadow-xl border-2 border-[var(--ring)]"
                            placeholder="First Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            className="p-6 h-full rounded-none focus:border-none shadow-xl border-2 border-[var(--ring)]"
                            placeholder="Last Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-4 mt-4 h-8">
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            className="p-6 h-full rounded-none focus:border-none w-full shadow-xl border-2 border-[var(--ring)]"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            className="p-6 h-full rounded-none focus:border-none shadow-xl border-2 border-[var(--ring)]"
                            placeholder="Password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-4 mt-8 h-full">
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="address_1"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            className="p-6 h-full rounded-none focus:border-none shadow-xl border-2 border-[var(--ring)]"
                            placeholder="Address 1"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="address_2"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            className="p-6 h-full rounded-none focus:border-none shadow-xl border-2 border-[var(--ring)]"
                            placeholder="Address 2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-4 mt-8 h-8">
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            className="p-6 h-full rounded-none focus:border-none shadow-xl border-2 border-[var(--ring)]"
                            placeholder="Age"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="contact_number"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            className="p-6 h-full rounded-none focus:border-none shadow-xl border-2 border-[var(--ring)]"
                            placeholder="Contact Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-x-4 mt-8 h-full">
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            className="p-6 h-full rounded-none focus:border-none shadow-xl border-2 border-[var(--ring)]"
                            placeholder="City"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full mb-4">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="cursor-pointer w-full h-17 border-2 rounded-none border-[var(--ring)] shadow-xl">
                                <SelectValue placeholder="Select a Role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[var(--input)]">
                              <SelectItem
                                className="cursor-pointer"
                                value="admin"
                              >
                                Admin
                              </SelectItem>
                              <SelectItem
                                className="cursor-pointer bg-[var(--input)]"
                                value="user"
                              >
                                User
                              </SelectItem>
                              <SelectItem
                                className="cursor-pointer bg-[var(--input)]"
                                value="manager"
                              >
                                Manager
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div></div>

              <div className="mt-4 w-full flex justify-end h-8">
                {/* <Link to="/"> */}
                <Button
                  variant="default"
                  type="submit"
                  className="h-[2.9375rem] w-[17.5rem] text-xl font-mediump-6 p-7 cursor-pointer rounded-none bg-[var(--primary)] hover:bg-[var(--ring)] hover:text-[var(--primary)] hover:border-4"
                >
                  Create New User
                </Button>
                {/* </Link> */}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
