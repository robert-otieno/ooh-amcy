import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Tabs } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { RequestType } from "../admin/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface RequestProps {
  requests: RequestType[];
}

const Request = ({ requests }: RequestProps) => {
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup direction='horizontal' className='h-full max-h-[800px] items-stretch'>
        <ResizablePanel defaultSize={1} minSize={30}>
          <Tabs defaultValue='all'>
            <div className='flex items-center px-4 py-2'>
              <h1 className='text-xl font-bold'>Requests</h1>
            </div>
            <Separator />
            <ScrollArea className='h-screen mt-4'>
              <div className='flex flex-col gap-2 p-4 pt-0'>
                {requests.map((item) => (
                  <button key={item.id} className={cn("flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent")}>
                    <div className='flex w-full flex-col gap-1'>
                      <div className='flex items-center'>
                        <div className='flex items-center gap-2'>
                          <div className='font-semibold'>
                            {item.firstName} {item.lastName}
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className='text-xs font-medium'>{item.jobTitle}</div>
                    </div>
                    <div className='line-clamp-2 text-xs text-muted-foreground'>
                      {item.company} - {item.industry}
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};

export default Request;
