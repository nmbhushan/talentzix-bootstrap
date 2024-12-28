'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FieldValues, Path } from 'react-hook-form'
import { ZodSchema, z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Progress } from '../ui/progress'
import { Button } from '../ui/button'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { ArrowLeft, ArrowRight, Check, AlertCircle } from 'lucide-react'
import PageContainer from './page-container'

export interface StepConfig {
    title: string
    description?: string
    icon?: React.ReactNode
    fields: {
        name: string
        label: string
        placeholder: string
        type: 'text' | 'number' | 'select' | 'checkbox' | 'password' | 'date'
        options?: string[]
        icon?: React.ReactNode
        disabled?: boolean
        hidden?: boolean
    }[]
}

interface MultiStepFormProps<T extends FieldValues> {
    schema: ZodSchema<T>
    steps: StepConfig[]
    onSubmit: SubmitHandler<T>
}

export const MultiStepForm = <T extends Record<string, any>>({
    schema,
    steps,
    onSubmit,
}: MultiStepFormProps<T>) => {
    const [currentStep, setCurrentStep] = useState(0)

    // Generate step-specific schema validation
    const stepSchema = z.object(
        Object.fromEntries(
            steps[currentStep].fields
                .filter((field) => !field.hidden) // Ignore hidden fields in validation
                .map((field) => [
                    field.name,
                    (schema as unknown as z.ZodObject<any>).shape[field.name],
                ])
                .filter(([, value]) => value !== undefined),
        ) as Record<string, z.ZodType<any>>,
    )

    const form = useForm<T>({
        resolver: zodResolver(stepSchema),
        mode: 'onChange',
        criteriaMode: 'all',
    })

    const {
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        trigger,
    } = form
    const progressPercentage = ((currentStep + 1) / steps.length) * 100

    const nextStep = async () => {
        const isStepValid = await trigger()
        if (isStepValid) setCurrentStep(currentStep + 1)
    }

    const prevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1)

    return (
        <PageContainer>
            <Form {...form}>
                <Card className="w-full mx-auto shadow-lg">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center space-x-2">
                            {steps[currentStep].icon}
                            <CardTitle className="text-2xl">
                                {steps[currentStep].title}
                            </CardTitle>
                        </div>
                        {steps[currentStep].description && (
                            <CardDescription>
                                {steps[currentStep].description}
                            </CardDescription>
                        )}
                    </CardHeader>

                    <CardContent>
                        <Progress
                            value={progressPercentage}
                            className="mb-4 h-2"
                        />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {steps[currentStep].fields.map(
                                    (fieldConfig, index) =>
                                        !fieldConfig.hidden && ( // Only render fields that are not hidden
                                            <FormField
                                                key={index}
                                                control={form.control}
                                                name={
                                                    fieldConfig.name as Path<T>
                                                }
                                                render={({ field }) => (
                                                    <FormItem className="py-2">
                                                        <FormLabel>
                                                            {fieldConfig.label}
                                                        </FormLabel>
                                                        <FormControl>
                                                            {fieldConfig.type ===
                                                                'select' ? (
                                                                <Select
                                                                    onValueChange={(
                                                                        value,
                                                                    ) =>
                                                                        field.onChange(
                                                                            value,
                                                                        )
                                                                    }
                                                                    value={
                                                                        field.value as string
                                                                    }
                                                                    disabled={
                                                                        fieldConfig.disabled
                                                                    }
                                                                >
                                                                    <SelectTrigger className="w-full">
                                                                        <SelectValue
                                                                            placeholder={
                                                                                fieldConfig.placeholder
                                                                            }
                                                                        />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        {fieldConfig.options?.map(
                                                                            (
                                                                                option,
                                                                                i,
                                                                            ) => (
                                                                                <SelectItem
                                                                                    key={
                                                                                        i
                                                                                    }
                                                                                    value={
                                                                                        option
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        option
                                                                                    }
                                                                                </SelectItem>
                                                                            ),
                                                                        )}
                                                                    </SelectContent>
                                                                </Select>
                                                            ) : fieldConfig.type ===
                                                                'checkbox' ? (
                                                                <div className="flex items-center space-x-2">
                                                                    <Checkbox
                                                                        id={
                                                                            fieldConfig.name
                                                                        }
                                                                        checked={
                                                                            !!field.value
                                                                        }
                                                                        onCheckedChange={(
                                                                            checked,
                                                                        ) =>
                                                                            field.onChange(
                                                                                checked,
                                                                            )
                                                                        }
                                                                        disabled={
                                                                            fieldConfig.disabled
                                                                        }
                                                                    />
                                                                    <label
                                                                        htmlFor={
                                                                            fieldConfig.name
                                                                        }
                                                                    >
                                                                        {
                                                                            fieldConfig.label
                                                                        }
                                                                    </label>
                                                                </div>
                                                            ) : (
                                                                <div className="relative">
                                                                    <Input
                                                                        type={
                                                                            fieldConfig.type
                                                                        }
                                                                        placeholder={
                                                                            fieldConfig.placeholder
                                                                        }
                                                                        {...field}
                                                                        disabled={
                                                                            fieldConfig.disabled
                                                                        }
                                                                        className={
                                                                            fieldConfig.icon
                                                                                ? 'pl-10'
                                                                                : ''
                                                                        }
                                                                        {...(fieldConfig.type ===
                                                                            'number' && {
                                                                            inputMode:
                                                                                'numeric',
                                                                            onChange:
                                                                                (
                                                                                    e,
                                                                                ) =>
                                                                                    field.onChange(
                                                                                        parseFloat(
                                                                                            e
                                                                                                .target
                                                                                                .value,
                                                                                        ) ||
                                                                                        0,
                                                                                    ),
                                                                        })}
                                                                    />
                                                                    {fieldConfig.icon && (
                                                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                                            {
                                                                                fieldConfig.icon
                                                                            }
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </FormControl>
                                                        <FormMessage>
                                                            {errors[
                                                                fieldConfig.name
                                                            ] && (
                                                                    <div className="flex items-center space-x-1 text-destructive">
                                                                        <AlertCircle
                                                                            size={
                                                                                16
                                                                            }
                                                                        />
                                                                        <span>
                                                                            {
                                                                                errors[
                                                                                    fieldConfig
                                                                                        .name
                                                                                ]
                                                                                    ?.message as string
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                )}
                                                        </FormMessage>
                                                    </FormItem>
                                                )}
                                            />
                                        ),
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </CardContent>

                    <CardFooter className="flex justify-between mt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            disabled={currentStep === 0}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Previous
                        </Button>
                        {currentStep < steps.length - 1 ? (
                            <div className="flex justify-center items-center">
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    disabled={!isValid}
                                >
                                    Next
                                    <ArrowRight className="w-4 h-4 ml-2 bg-transparent" />
                                </Button>
                            </div>
                        ) : (
                            <Button
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                                disabled={!isValid || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit
                                        <Check className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </Form>
        </PageContainer>
    )
}
