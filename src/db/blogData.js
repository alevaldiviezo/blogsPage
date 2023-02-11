import blog1 from '../images/computer.jpg';
import blog2 from '../images/windows.jpg';
import blog3 from '../images/ram.jpg';
import blog4 from '../images/drive.jpg';
import blog5 from '../images/battery.jpg';


export const blogs = [
    {
        id: 1,
        name:'How to set up your computer',
        author: 'Ben Graham',
        url: '/blogs/1',
        content: "So you have a new computer and you're ready to set it up. This may seem like an overwhelming and complicated task, but it's actually a lot easier than you might think! Most computers are set up in a similar way, so it doesn't matter what brand of computer you have.If you're setting up a new computer that's still in the box, you'll probably find a how-to guide that includes step-by-step details. Even if it didn't include instructions, you can still set up the computer in a few easy steps. We'll take you through the different steps needed to set up a typical computer.",
        image: blog1
    },
    {
        id: 2,
        name:'Install nodejs in Windows OS',
        author: 'Zoey Friedman',
        url: '/blogs/2',
        content: "JavaScript has become a go-to language in the software development industry. The front-end developers aim to create feature-rich UI with JavaScript development and engage with back-end web services using AJAX. Since JavaScript offers non-blocking nature, web developers who work on the server-side have shifted their paradigm to JavaScript.Nowadays, many front-end frameworks like TezJS, VueJS, React, Angular, etc., use JavaScript as their primary language. Thanks to its code optimization functionality. In fact, choosing JavaScript development services as your first option will surely bring plenty of opportunities to master a single language while still developing “full-stack” web applications. And the vital key to this server-side JavaScript revolution is NodeJs.Now, let’s understand what Node.js is.NodeJs is a cross-platform environment that runs and executes JavaScript codes outside the browser. It’s a version of Chrome’s V8 JavaScript runtime engine, allowing you to develop server-side JavaScript applications. It comes up with everything which is required to run a program written in JavaScript.",
        image: blog2
    },
    {
        id: 3,
        name:'Update your RAM memory',
        author: 'Pete Campbell',
        url: '/blogs/3',
        content: "To upgrade or add new RAM to your laptop, locate the RAM slot inside your computer and align the new RAM module to fit into position. Then, press down gently on the RAM cartridge until you hear a click signaling that the module has locked into the RAM clips inside your laptop.Note that some laptops have their RAM modules soldered directly onto the motherboard, so check that you can perform the upgrade yourself before proceeding any further. Assuming your machine has removable modules, here are more detailed steps for how to replace RAM on a laptop:Power down your laptop, close the lid, and let it completely cool down.In the meantime, unplug all cords, cables, and peripherals.Place your laptop upside-down on a hard, flat surface.Depending on the make and model of your laptop, either unscrew and remove the bottom casing, or open up the section enclosing your RAM.Protect sensitive internal components from static discharge by touching an unpainted metal surface to ground yourself.Remove your existing memory modules by gently pushing aside the clips holding them in place. The RAM module will partially pop out, and then you can pull it completely out of the slot.Taking care not to touch the gold connectors on top of the module, insert your new RAM by aligning the module with the slot, then pressing down firmly on the module until it locks in place.Once all new modules have been installed, resecure the RAM access panel or bottom casing, and turn your laptop the right way up before plugging cables and cords back in.",
        image: blog3
    },
    {
        id: 4,
        name:'Create a virtual drive',
        author: 'Paul Johnson',
        url: '/blogs/4',
        content: "It’s not difficult to create a virtual drive directly in Windows 10, presuming your physical hard drive has the capacity. Here’s how to create a virtual drive by easily initializing, partitioning, and formatting a VHDX or VHD.Simply search Start for “Create and format hard disk partitions.” Go to Action, Create VHD, then Browse to find the folder you’d like to house the virtual disk. You’ll need to give this folder a name, choose either VHDX or VHD as the file type, and specify the drive size. For the VHDX format, choose Dynamic Expanding, and for VHD, choose Fixed Size.After creating this virtual drive, you’ll need to right-click the drive and hit Initialize Disk. Choose the Master Boot Record option and hit OK. Now, right click the unallocated space and select the New Simple Volume option. After choosing the Drive letter, be sure to format the volume for NTFS, choose Default Allocation Unit Size and Perform a Quick Format, then select Enable Compression. Your virtual drive should then be ready to use.",
        image: blog4
    },
    {
        id: 5,
        name:'How to change your motherboard battery',
        author: 'Hank Medvedev',
        url: '/blogs/5',
        content: "Generally, the BIOS/CMOS battery is placed fairly prominently on the motherboard for easy access, but sometimes it gets hidden by other components or heatsinks, so it may take some effort to find. Once you find the battery, swapping it out should be fairly straightforward. There's a small plastic slot built into the motherboard to hold the battery, with a metal clip or tab on one side holding the battery down. Press the clip or tab to allow the old battery to be removed, then insert and press down on the new battery to secure it to the motherboard.",
        image: blog5
    },
]


