import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { EnquiryForm } from '@/components/enquiry-form';
import { Button } from '@/components/ui/button';

export function QouteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-md border-b-4 border-[#eec248] bg-[#ffd563] px-6 py-3 text-sm font-bold text-black shadow-sm transition-colors hover:bg-[#ffca28] active:translate-y-1 active:border-b-0 md:text-base">
          Get Solar Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-lg border-none bg-transparent p-0 shadow-none">
        <EnquiryForm />
      </DialogContent>
    </Dialog>
  );
}
