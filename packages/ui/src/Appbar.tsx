import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    };
    onSignin: () => void;
    onSignout: () => void;
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return (
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 shadow-sm bg-white">
            <div className="flex items-center space-x-2">
                {/* Logo */}
                <div className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                    PayTM
                </div>
                <span className="text-sm text-gray-500 hidden sm:inline">Secure Wallet</span>
            </div>

            <div className="flex items-center space-x-4">
                {user?.name && (
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm">
                            {user.name[0]?.toUpperCase()}
                        </div>
                        <span className="text-sm text-gray-700 font-medium hover:underline hidden sm:inline">
                            {user.name}
                        </span>
                    </div>
                )}
                <Button
                    onClick={user ? onSignout : onSignin}
                    //@ts-ignore
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                >
                    {user ? "Logout" : "Login"}
                </Button>
            </div>
        </div>
    );
};
