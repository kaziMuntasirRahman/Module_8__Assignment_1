১. Interface আর Type-এর পার্থক্য

Interface সাধারণত object-এর স্ট্রাকচার ঠিক করতে ব্যবহার হয়। এটা বারবার কল করে নিজে থেকেই merge হতে পারে, তাই বড় প্রজেক্টে সুবিধা হয়।
Type আরও flexible—object, union, primitive—সবকিছু প্রকাশ করতে পারে, কিন্তু এটা merge হয় না।
সহজভাবে: interface—structure, type—flexibility।

২. keyof কী কাজে লাগে
keyof কোনো object-এর সব property নামকে একটি তালিকা হিসেবে ধরে।
এটি এমন কাজে লাগে যাতে ভুল property ব্যবহার না হয় এবং কোড আরও নিরাপদ থাকে।
