"use client"
import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
    header: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
    variant?: 'default' | 'minimal' | 'card' | 'underline' | 'modern';
    iconPosition?: 'left' | 'right';
    openFirst?: boolean;
    allowMultiple?: boolean;
    icon?: React.ReactNode;
    chevronColor?: string;
    transition?: {
        type?: 'spring' | 'tween';
        duration?: number;
        bounce?: number;
    };
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Accordion = ({
                              items,
                              className = '',
                              variant = 'modern', // Changed default to modern
                              iconPosition = 'right',
                              openFirst = false,
                              allowMultiple = false,
                              icon,
                              chevronColor = 'text-gray-500',
                              transition = { type: 'tween', duration: 0.3, bounce: 0 },
                              maxWidth = 'xl'
                          }: AccordionProps) => {
    const [openIndices, setOpenIndices] = useState<number[]>(openFirst ? [0] : []);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleItem = (index: number) => {
        setOpenIndices(prev =>
            prev.includes(index)
                ? allowMultiple
                    ? prev.filter(i => i !== index)
                    : []
                : allowMultiple
                    ? [...prev, index]
                    : [index]
        );
    };

    const maxWidthClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        full: 'max-w-full'
    };

    const variantClasses = {
        default: 'border rounded-lg shadow-sm bg-white dark:bg-gray-800',
        minimal: 'border-b border-gray-200 dark:border-gray-700',
        card: 'rounded-xl shadow-md bg-white dark:bg-gray-800 p-1',
        underline: 'border-b border-gray-100 dark:border-gray-800',
        modern: `rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-sm ${maxWidthClasses[maxWidth]} w-full` // New modern variant
    };

    const headerBaseClasses = {
        default: 'hover:bg-gray-50 dark:hover:bg-gray-700/30',
        minimal: 'hover:bg-gray-50 dark:hover:bg-gray-800/30',
        card: 'hover:bg-gray-50 dark:hover:bg-gray-700/20',
        underline: 'hover:bg-gray-50 dark:hover:bg-gray-800/20',
        modern: 'hover:bg-gray-100/50 dark:hover:bg-gray-700/30' // New modern variant
    };

    const headerTextClasses = {
        default: 'text-gray-800 dark:text-gray-100',
        minimal: 'text-gray-800 dark:text-gray-100',
        card: 'text-gray-800 dark:text-gray-100',
        underline: 'text-gray-800 dark:text-gray-100',
        modern: 'text-blue-950 dark:text-gray-50' // New modern variant
    };

    const bodyTextClasses = {
        default: 'text-gray-600 dark:text-gray-300',
        minimal: 'text-gray-600 dark:text-gray-300',
        card: 'text-gray-600 dark:text-gray-300',
        underline: 'text-gray-600 dark:text-gray-300',
        modern: 'text-gray-700 dark:text-gray-200' // New modern variant
    };

    return (
        <div className={`space-y-3 w-full ${className}`}>
            {items.map((item, index) => {
                const isOpen = openIndices.includes(index);

                return (
                    <div
                        key={index}
                        className={`${variantClasses[variant]} ${item.className || ''} ${
                            isOpen ? '!border-blue-400 dark:!border-gray-600' : ''
                        } transition-all duration-200 ${
                            variant === 'modern'
                                ? isOpen
                                    ? 'ring-1 ring-blue-200 shadow-lg'
                                    : 'hover:shadow-md hover:ring-1 hover:ring-blue-100 dark:hover:ring-gray-700'
                                : ''
                        }`}
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className={`w-full flex items-center justify-between p-5 transition-all duration-200 ${
                                headerBaseClasses[variant]
                            } ${isOpen ? 'bg-gray-100/50 dark:bg-gray-700/30' : ''} ${
                                item.headerClassName || ''
                            } rounded-t-xl ${variant === 'modern' && !isOpen ? 'rounded-b-xl' : ''}`}
                            aria-expanded={isOpen}
                        >
                            {iconPosition === 'left' && (
                                <span className={`mr-3 ${chevronColor}`}>
                  {icon ? (
                      icon
                  ) : isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                  ) : (
                      <ChevronDown className="w-5 h-5" />
                  )}
                </span>
                            )}

                            <div className={`flex-1 text-left font-medium ${headerTextClasses[variant]}`}>
                                {item.header}
                            </div>

                            {iconPosition === 'right' && (
                                <span className={`ml-3 ${chevronColor}`}>
                  {icon ? (
                      icon
                  ) : isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                  ) : (
                      <ChevronDown className="w-5 h-5" />
                  )}
                </span>
                            )}
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: 'auto',
                                        opacity: 1,
                                        transition: {
                                            height: {
                                                type: transition.type,
                                                duration: transition.duration,
                                                bounce: transition.bounce
                                            },
                                            opacity: {
                                                duration: transition.duration! * 0.6,
                                                ease: 'easeIn'
                                            }
                                        }
                                    }}
                                    exit={{
                                        height: 0,
                                        opacity: 0,
                                        transition: {
                                            height: {
                                                type: transition.type,
                                                duration: transition.duration,
                                                bounce: transition.bounce
                                            },
                                            opacity: {
                                                duration: transition.duration! * 0.3,
                                                ease: 'easeOut'
                                            }
                                        }
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div
                                        ref={(el) => {
                                            contentRefs.current[index] = el;
                                        }}
                                        className={`pb-5 px-5 ${bodyTextClasses[variant]} ${
                                            item.bodyClassName || ''
                                        }`}
                                    >
                                        {item.children}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};