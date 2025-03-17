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
import { Link } from "react-router-dom";

const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  contact_number: z.coerce
    .number()
    .positive()
    .gte(0, { message: "The value must be greater than 0" }),
  address_1: z.string().min(2, {
    message: "Address 1 must be at least 2 characters.",
  }),
  address_2: z.string().min(2, {
    message: "Address 2 must be at least 2 characters.",
  }),
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
});

function UserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      contact_number: 0,
      address_1: "",
      address_2: "",
      role: "",
    },
  });
  return (
    <section>
      <div>
        <h1 className="text-3xl">Create User </h1>
      </div>
      <div className="mt-4 text-gray-500">
        <p>Create a New User Profile</p>
      </div>
      <div className="flex items-center justify-center h-16 gap-x-4 mt-4">
        <Form {...form}>
          <form className="space-y-8 w-full shadow-xl border-2 border-gray-300">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 h-full rounded-none focus:border-none"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Form {...form}>
          <form className="space-y-8 w-full shadow-xl border-2 border-gray-300">
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="p-6 h-full rounded-none focus:border-none"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <Form {...form}>
        <form className="space-y-8 w-full shadow-xl border-2 border-gray-300 mt-4">
          <FormField
            control={form.control}
            name="contact_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    className="p-6 h-full rounded-none focus:border-none"
                    placeholder="Contact Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Form {...form}>
        <form className="space-y-8 w-full shadow-xl border-2 border-gray-300 mt-4">
          <FormField
            control={form.control}
            name="address_1"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="p-6 h-full rounded-none focus:border-none"
                    placeholder="Address 1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Form {...form}>
        <form className="space-y-8 w-full shadow-xl border-2 border-gray-300 mt-4">
          <FormField
            control={form.control}
            name="address_2"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="p-6 h-full rounded-none focus:border-none"
                    placeholder="Address 2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Form {...form}>
        <form className="space-y-8 w-full shadow-xl border-2 border-gray-300 mt-4">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="p-6 h-full rounded-none focus:border-none"
                    placeholder="Role"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="mt-4 w-full flex justify-end h-8">
        <Link to="/">
          <Button
            variant="default"
            type="submit"
            className="h-[2.9375rem] w-[17.5rem] text-xl font-mediump-6 p-7 cursor-pointer rounded-none bg-black hover:bg-white hover:text-black hover:border-4"
          >
            Create New User
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default UserForm;
