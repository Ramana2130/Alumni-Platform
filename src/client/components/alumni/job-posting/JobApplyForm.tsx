"use client"
import {
  useState
} from "react"
import {
  toast
} from "sonner"
import {
  useForm
} from "react-hook-form"
import {
  zodResolver
} from "@hookform/resolvers/zod"
import {
  z
} from "zod"
import {
  cn
} from "@/lib/utils"
import {
  Button
} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Input
} from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  format
} from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  Calendar
} from "@/components/ui/calendar"
import {
  Calendar as CalendarIcon
} from "lucide-react"

const formSchema = z.object({
  name_0902881016: z.string().min(1),
  name_6707159728: z.string().min(1),
  name_7704212081: z.string().min(1),
  name_2815063249: z.string(),
  name_5488705728: z.number().min(1000).max(9999999999),
  name_4679047887: z.date(),
  name_0621745124: z.string().min(1)
});

export default function JobApplyForm() {

  const form = useForm < z.infer < typeof formSchema >> ({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "name_4679047887": new Date()
    },
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-3xl">
        
        <FormField
          control={form.control}
          name="name_0902881016"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_6707159728"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Role</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type=""
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 gap-4">
          
          <div className="col-span-4">
            
        <FormField
          control={form.control}
          name="name_7704212081"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          
        </div>
        
        <FormField
          control={form.control}
          name="name_2815063249"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
                
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="name_5488705728"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary Pacakge</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="number"
                {...field} />
              </FormControl>
              <FormDescription>Salary per lakhs Annum</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
      <FormField
      control={form.control}
      name="name_4679047887"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Last date to Apply</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
       
          <FormMessage />
        </FormItem>
      )}
    />
        
        <FormField
          control={form.control}
          name="name_0621745124"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apply Link</FormLabel>
              <FormControl>
                <Input 
                placeholder=""
                
                type="text"
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}