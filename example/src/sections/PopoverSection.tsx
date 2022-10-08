import React, { useState } from 'react';
import { Button, Popover, SectionHeading } from 'base-elements-react/dist';
import { HorizontalStack, VerticalStack } from 'base-elements-react/dist';

function PopoverSection() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(!open);
  const close = () => setOpen(false);
  return (
    <VerticalStack className='section'>
      <SectionHeading>Popover</SectionHeading>
      <HorizontalStack gap wrapItems='wrap'>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_left_edge'
          yLocation='top'
        >
          Hello!
        </Popover>
        {/* <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='center'
          yLocation='top'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_right_edge'
          yLocation='top'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_left_edge'
          yLocation='top_cover_anchor'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='center'
          yLocation='top_cover_anchor'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_right_edge'
          yLocation='top_cover_anchor'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_left_edge'
          yLocation='center'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='center'
          yLocation='center'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_right_edge'
          yLocation='center'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_left_edge'
          yLocation='bottom_cover_anchor'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='center'
          yLocation='bottom_cover_anchor'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_right_edge'
          yLocation='bottom_cover_anchor'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_left_edge'
          yLocation='bottom'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='center'
          yLocation='bottom'
        >
          Hello!
        </Popover>
        <Popover
          anchor={<Button onClick={toggleOpen}>Toggle Popover</Button>}
          open={open}
          onOutsideClick={close}
          xLocation='snap_right_edge'
          yLocation='bottom'
        >
          Hello!
        </Popover> */}
      </HorizontalStack>
    </VerticalStack>
  );
}

export default PopoverSection;
