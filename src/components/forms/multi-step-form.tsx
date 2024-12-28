'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Step {
  title: string
  description?: string
}

interface MultiStepFormProps {
  steps: Step[]
  currentStep: number
  onNext?: () => void
  onPrevious?: () => void
  isLastStep?: boolean
  isLoading?: boolean
  isValid?: boolean
  className?: string
  showStepIndicator?: boolean
  children: React.ReactNode
}

export function MultiStepForm({
  steps,
  currentStep,
  onNext,
  onPrevious,
  isLastStep = false,
  isLoading = false,
  isValid = true,
  className,
  showStepIndicator = true,
  children
}: MultiStepFormProps) {
  return (
    <div className={cn("relative space-y-4", className)}>
      {showStepIndicator && (
        <div className="relative">
          <div className="absolute top-0 left-0 w-full flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "flex items-center",
                  index === steps.length - 1 ? "justify-end" : ""
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center rounded-full border-0 transition-colors",
                    currentStep > index
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep === index
                      ? "border-primary"
                      : "border-muted"
                  )}
                >
                  {currentStep > index ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-sm">{index + 1}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "w-full h-[2px] mx-2",
                      currentStep > index ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="pt-14 pb-2 px-1">
            <h2 className="text-lg font-medium">{steps[currentStep].title}</h2>
            {steps[currentStep].description && (
              <p className="text-sm text-muted-foreground mt-1">
                {steps[currentStep].description}
              </p>
            )}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrevious}
          className={cn(
            "flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors",
            currentStep === 0 && "invisible"
          )}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!isValid || isLoading}
          className={cn(
            "flex items-center text-sm",
            isValid
              ? "text-primary hover:text-primary/90"
              : "text-muted-foreground cursor-not-allowed",
            isLastStep && "invisible"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 mr-1 animate-spin" />
          ) : (
            <>
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}