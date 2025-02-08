"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("https://formspree.io/f/xwpvqqdb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please try again or email directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  disabled={isSubmitting}
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  disabled={isSubmitting}
                />
                {errors.email && <span className="text-red-500 text-sm">Valid email required</span>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  disabled={isSubmitting}
                />
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>

              {submitSuccess && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg">
                  Message sent successfully!
                </div>
              )}

              {submitError && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg">
                  {submitError}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          <div className="space-y-8">
            <div className="h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
                <p className="mb-4">Prefer direct communication?</p>
                <a
                  href="mailto:chideraaniude@gmail.com"
                  className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Send Email Now
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  chideraaniude@gmail.com
                  <br />
                  +234 814 975 6258
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

