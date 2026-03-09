import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PortfolioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  images?: string[];
  bulletPoints?: string[];
  additionalText?: string;
}

const PortfolioModal = ({ open, onOpenChange, title, description, images, bulletPoints, additionalText }: PortfolioModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card max-w-2xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 space-y-4">
            <DialogHeader>
              <DialogTitle className="font-heading text-3xl">{title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground leading-relaxed pt-2">
                {description}
              </DialogDescription>
            </DialogHeader>

            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-disc list-inside">
                {bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {additionalText && (
              <p className="text-sm text-muted-foreground leading-relaxed">{additionalText}</p>
            )}

            {images && images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 pt-2">
                {images.map((src, i) => (
                  <img key={i} src={src} alt={`${title} photo ${i + 1}`} className="rounded-lg w-full h-40 object-cover" />
                ))}
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
