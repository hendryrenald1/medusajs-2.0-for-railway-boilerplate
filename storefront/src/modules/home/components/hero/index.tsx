import { Button } from "@medusajs/ui"
import Image from "next/image"

const features = [
	{ icon: "🥬", label: "Fresh Vegetables", border: "border-green-600", text: "text-green-700" },
	{ icon: "🍗", label: "Raw Meats", border: "border-orange-400", text: "text-orange-600" },
	{ icon: "🥛", label: "Milk & Dairies", border: "border-orange-400", text: "text-orange-600" },
	{ icon: "🥫", label: "Canned & Frozen Food", border: "border-green-600", text: "text-green-700" },
]

const Hero = () => {
	return (
		<section className="w-full border-b border-ui-border-base bg-ui-bg-subtle">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8 gap-8">
				{/* Left Side */}
				<div className="flex-1 flex flex-col items-start justify-center text-left space-y-6 order-1 md:order-none w-full md:w-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight">
						Best deal for your groceries
					</h1>
					<p className="text-lg text-green-700">
						Groceries delivered, smiles guaranteed.
					</p>
					<div className="flex flex-row gap-4 mt-4 w-full md:w-auto">
						<Button className="bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full px-8 py-3 shadow-md transition-colors">
							Shop Now
						</Button>
						<button
							type="button"
							className="border-2 border-green-600 text-green-700 text-lg font-semibold rounded-full px-8 py-3 bg-white hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600"
						>
							Learn More
						</button>
					</div>
					{/* Features only on md+ */}
					<div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full max-w-md">
						{features.map((feature) => (
							<button
								key={feature.label}
								type="button"
								className={`flex items-center gap-2 border-2 ${feature.border} rounded-full px-4 py-2 ${feature.text} font-medium bg-white hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600`}
								aria-label={feature.label}
							>
								<span className="text-xl" aria-hidden="true">{feature.icon}</span> {feature.label}
							</button>
						))}
					</div>
				</div>
				{/* Right Side (Logo/Image) - on mobile, order-2 to show after text/buttons */}
				<div className="flex-1 flex items-center justify-center order-2 md:order-none w-full md:w-auto mt-8 md:mt-0">
					<Image
						src="/img/hero.png"
						alt="GroVest groceries illustration"
						width={500}
						height={500}
						className="w-full h-auto max-w-md"
						priority
					/> 
					{/* Features on mobile below image */}
					{typeof window !== 'undefined' && (
						<div className="grid grid-cols-1 gap-4 mt-6 w-full max-w-md md:hidden">
							{features.map((feature) => (
								<button
									key={feature.label}
									type="button"
									className={`flex items-center gap-2 border-2 ${feature.border} rounded-full px-4 py-2 ${feature.text} font-medium bg-white hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600`}
									aria-label={feature.label}
								>
									<span className="text-xl" aria-hidden="true">{feature.icon}</span> {feature.label}
								</button>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Hero
