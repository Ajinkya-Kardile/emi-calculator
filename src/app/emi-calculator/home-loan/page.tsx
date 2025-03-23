import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";

export default function HomeLoan() {
    return (
        <div className="container mx-auto p-6">
            <EmiCalculatorComponent loanType="home" />
        </div>
    );
}
