import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";

export default function CarLoan() {
    return (
        <div className="container mx-auto p-6">
            <EmiCalculatorComponent loanType="car"/>
        </div>
    );
}
