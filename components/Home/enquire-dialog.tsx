import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { EnquiryForm } from '@/components/enquiry-form';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export function EnquiryDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[85vh] w-[95vw] max-w-lg overflow-y-auto border-none bg-transparent p-0 shadow-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <VisuallyHidden>
          <DialogTitle>Enquiry Form</DialogTitle>
        </VisuallyHidden>
        <EnquiryForm />
      </DialogContent>
    </Dialog>
  );
}
