import EmiCalculatorComponent from "@/components/emicalculator/emicalculator";

export default function CreditCardEmi() {
    return (
        <div className="container mx-auto p-6">
            <EmiCalculatorComponent loanType="creditCard" />
        </div>
    );
}
