export default function OptionCard() {
    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <div className="flex transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-10 lg:gap-x-8">
                                <div className="sm:col-span-8 lg:col-span-7">
                                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>

                                    <section aria-labelledby="information-heading" className="mt-2">
                                        <h3 id="information-heading" className="sr-only">Product information</h3>

                                        <p className="text-2xl text-gray-900">$192</p>

                                        <div className="mt-6">
                                            <h4 className="sr-only">Reviews</h4>
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    <div className="h-5">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section aria-labelledby="options-heading" className="mt-10">
                                        <h3 id="options-heading" className="sr-only">Product options</h3>

                                        <form>
                                            <div>
                                                <h4 className="text-sm font-medium text-gray-900">Color</h4>
                                                <div className="h-8">
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="text-sm font-medium text-gray-900">Size</h4>
                                                </div>

                                                <fieldset className="mt-4">
                                                    <legend className="sr-only">Choose a size</legend>
                                                    <div className="grid grid-cols-4 gap-4">
                                                        <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                            <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                                            <span id="size-choice-0-label">XXS</span>

                                                            <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                        </label>
                                                        <div className="h-8">

                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
